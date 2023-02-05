import {
    MouseEvent,
    RefObject,
    useCallback,
    useState,
    useContext,
    useEffect,
    useRef,
    TouchEvent,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    CATCHER_SIZE,
    CATCHER_SPEED,
    DEFAULT_CATCHER,
    DEFAULT_HEIGHT,
    DEFAULT_WIDTH,
    DROPS_LIST,
    DROPS_SCORE_MAP,
    DROP_SIZE,
    DROP_SPEED,
} from './constants'
import { ICatcher, IDrop } from './types'
import { checkColliding, getResponsiveWidth } from './helper'
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
        const image = DROPS_LIST[Math.floor(Math.random() * DROPS_LIST.length)]
        // random from 5 to 95
        const x = (Math.floor(Math.random() * 90 + 5) * DEFAULT_WIDTH) / 100
        const score = DROPS_SCORE_MAP[image]

        return {
            image,
            x,
            y: 0,
            size: DROP_SIZE,
            score,
        }
    }, [])

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
                if (newY <= DEFAULT_HEIGHT && !isColliding) {
                    newDrops.push({
                        ...drop,
                        y: newY,
                    })
                }
            })
            return newDrops
        })
    }, [catcher, score, setScore])

    const onCursorMove = (event: MouseEvent) => {
        if (!fieldRef.current) {
            return
        }
        setCursorX(
            event.clientX -
                (fieldRef.current.offsetLeft - fieldRef.current.offsetWidth / 2)
        )
    }

    const onTouchMove = (event: TouchEvent) => {
        if (!fieldRef.current) {
            return
        }
        setCursorX(
            event.changedTouches[0].clientX -
                (fieldRef.current.offsetLeft - fieldRef.current.offsetWidth / 2)
        )
    }

    const updateCatcher = useCallback(() => {
        setCatcher((oldCatcher) => {
            const detlaX =
                cursorX -
                getResponsiveWidth(
                    oldCatcher.x,
                    fieldRef.current?.offsetWidth || 0
                )
            let newCatcherX
            const buffer = getResponsiveWidth(
                CATCHER_SIZE / 2,
                fieldRef.current?.offsetWidth || 0
            )
            if (buffer > detlaX && detlaX > -buffer) {
                newCatcherX = oldCatcher.x
            } else if (detlaX > 1) {
                newCatcherX = oldCatcher.x + CATCHER_SPEED / 60
            } else {
                newCatcherX = oldCatcher.x - CATCHER_SPEED / 60
            }
            return { ...oldCatcher, x: newCatcherX }
        })
    }, [cursorX, fieldRef])

    const advanceStep = useCallback(() => {
        updateCatcher()
        updateDropY()
    }, [updateCatcher, updateDropY])

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
        onTouchMove,
    }
}
