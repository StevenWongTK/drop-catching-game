import {
    MouseEvent,
    MutableRefObject,
    RefObject,
    useCallback,
    useState,
} from 'react'
import {
    CATCH_SPEED,
    DROPS_LIST,
    DROPS_SCORE_MAP,
    DROP_SPEED,
} from './constants'
import { IDrops } from './types'

export const useGame = (
    fieldRef: RefObject<HTMLDivElement>,
    requestRef: MutableRefObject<number>
) => {
    const [isStarted, setIsStarted] = useState(false)
    const [drops, setDrops] = useState<IDrops[]>([])
    const [score, setScore] = useState(0)
    const [cursorX, setCursorX] = useState(0)
    const [catchX, setCatchX] = useState(50)

    const createDrops = () => {
        const image = DROPS_LIST[Math.floor(Math.random() * DROPS_LIST.length)]
        const x = Math.floor(Math.random() * 100)
        const score = DROPS_SCORE_MAP[image]

        return {
            image,
            x,
            y: 0,
            score,
        }
    }

    const removeDrops = (drops: IDrops[], index: number) => {
        const newList = [...drops]
        newList.splice(index, 1)
        return newList
    }

    const spawnDrops = useCallback(() => {
        console.log('spawnDrops')
        setDrops((oldList) => [...oldList, createDrops()])
    }, [])

    const updateDropY = useCallback(() => {
        setDrops((oldList) => {
            const newDrops: IDrops[] = []
            for (const drop of oldList) {
                const newY = drop.y + DROP_SPEED / 60
                if (fieldRef.current && newY <= fieldRef.current.offsetHeight) {
                    newDrops.push({
                        ...drop,
                        y: newY,
                    })
                }
            }
            return newDrops
        })
    }, [fieldRef])

    const onDropsCaugth = (index: number) => {
        setScore(score + drops[index].score)
        setDrops(removeDrops(drops, index))
    }

    const onCursorMove = (event: MouseEvent) => {
        setCursorX(event.pageX)
    }

    const updateCatchX = useCallback(() => {
        setCatchX((oldCatchX) => {
            const detlaX = cursorX - oldCatchX
            if (5 > detlaX && detlaX > -5) {
                return oldCatchX
            } else if (detlaX > 1) {
                return oldCatchX + CATCH_SPEED / 60
            } else {
                return oldCatchX - CATCH_SPEED / 60
            }
        })
    }, [cursorX])

    const advanceStep = useCallback(() => {
        updateCatchX()
        updateDropY()

        requestRef.current = requestAnimationFrame(advanceStep)
    }, [requestRef, updateCatchX, updateDropY])

    // TODO: delete unused output
    return {
        isStarted,
        setIsStarted,
        drops,
        spawnDrops,
        catchX,
        onCursorMove,
        advanceStep,
    }
}
