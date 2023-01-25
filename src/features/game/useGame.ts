import {
    MouseEvent,
    MutableRefObject,
    RefObject,
    useCallback,
    useState,
} from 'react'
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

export const useGame = (
    fieldRef: RefObject<HTMLDivElement>,
    requestRef: MutableRefObject<number>
) => {
    const [isStarted, setIsStarted] = useState(false)
    const [drops, setDrops] = useState<IDrop[]>([])
    const [catcher, setCatcher] = useState<ICatcher>(DEFAULT_CATCHER)
    const [score, setScore] = useState(0)
    const [cursorX, setCursorX] = useState(0)

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
        console.log('spawnDrops')
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
    }, [catcher, fieldRef, score])

    const onCursorMove = (event: MouseEvent) => {
        setCursorX(event.pageX)
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

    // TODO: delete unused output
    return {
        isStarted,
        setIsStarted,
        drops,
        spawnDrops,
        catcher,
        score,
        onCursorMove,
        advanceStep,
    }
}
