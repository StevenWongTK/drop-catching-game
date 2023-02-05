import {
    MouseEvent,
    RefObject,
    useCallback,
    useState,
    useContext,
    useEffect,
    useRef,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    CATCHER_SPEED,
    DEFAULT_CATCHER,
    DROPS_LIST,
    DROPS_SCORE_MAP,
    DROP_SIZE,
    DROP_SPEED,
} from './constants'
import { ICatcher, IDrop } from './types'
import { checkColliding } from './helper'
import { scoreContext } from '../../App'
import {
    endGameAction,
    isGameStartedSelector,
    openResultModalAction,
} from '../../store/slice'
import { DROP_INTERVAL, GAME_DURATION } from './constants'

export const useGame = (fieldRef: RefObject<HTMLDivElement>) => {
    const [drops, setDrops] = useState<IDrop[]>([])
    const [catcher, setCatcher] = useState<ICatcher>(DEFAULT_CATCHER)
    const [cursorX, setCursorX] = useState(0)
    const { score, setScore } = useContext(scoreContext)
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const requestRef = useRef<number>(0)
    const isGameStarted = useSelector(isGameStartedSelector)
    const dispatch = useDispatch()

    const initGame = useCallback(() => {
        setScore(0)
        setDrops([])
        setCatcher(DEFAULT_CATCHER)
    }, [setScore])

    const createDrops = useCallback(() => {
        if (!fieldRef.current) {
            return {} as IDrop
        }
        const image = DROPS_LIST[Math.floor(Math.random() * DROPS_LIST.length)]
        const x =
            (Math.floor(Math.random() * 100) * fieldRef.current.offsetWidth) /
            100
        const score = DROPS_SCORE_MAP[image]

        return {
            image,
            x,
            y: 0,
            size: DROP_SIZE,
            score,
        }
    }, [fieldRef])

    const spawnDrops = useCallback(() => {
        setDrops((oldDrops) => [...oldDrops, createDrops()])
    }, [createDrops])

    const updateDropY = useCallback(() => {
        setDrops((oldDrops) => {
            const newDrops: IDrop[] = []
            oldDrops.forEach((drop) => {
                const newY = drop.y + DROP_SPEED / 60
                const isColliding = checkColliding(drop, catcher)
                if (isColliding) {
                    setScore(score + drop.score)
                }
                if (
                    fieldRef.current &&
                    newY <= fieldRef.current.offsetHeight &&
                    !isColliding
                ) {
                    newDrops.push({
                        ...drop,
                        y: newY,
                    })
                }
            })
            return newDrops
        })
    }, [catcher, fieldRef, score, setScore])

    const onCursorMove = (event: MouseEvent) => {
        if (!fieldRef.current) {
            return
        }
        setCursorX(
            event.clientX -
                (fieldRef.current.offsetLeft - fieldRef.current.offsetWidth / 2)
        )
    }

    const updateCatcher = useCallback(() => {
        setCatcher((oldCatcher) => {
            const detlaX = cursorX - oldCatcher.x
            let newCatcherX
            if (5 > detlaX && detlaX > -5) {
                newCatcherX = oldCatcher.x
            } else if (detlaX > 1) {
                newCatcherX = oldCatcher.x + CATCHER_SPEED / 60
            } else {
                newCatcherX = oldCatcher.x - CATCHER_SPEED / 60
            }
            return { ...oldCatcher, x: newCatcherX }
        })
    }, [cursorX])

    const advanceStep = useCallback(() => {
        updateCatcher()
        updateDropY()
        requestRef.current = requestAnimationFrame(advanceStep)
    }, [requestRef, updateCatcher, updateDropY])

    useEffect(() => {
        const stop = () => {
            intervalRef.current && clearInterval(intervalRef.current)
        }
        if (isGameStarted) {
            intervalRef.current = setInterval(spawnDrops, DROP_INTERVAL)
            timeoutRef.current = setTimeout(() => {
                dispatch(endGameAction())
                dispatch(openResultModalAction())
            }, GAME_DURATION)
        } else {
            stop()
        }
        return () => stop()
    }, [dispatch, isGameStarted, spawnDrops])

    useEffect(() => {
        const stop = () => {
            requestRef.current && cancelAnimationFrame(requestRef.current)
        }
        if (isGameStarted) {
            requestRef.current = requestAnimationFrame(advanceStep)
        } else {
            stop()
        }
        return () => stop()
    }, [advanceStep, isGameStarted])

    return {
        initGame,
        drops,
        catcher,
        onCursorMove,
    }
}
