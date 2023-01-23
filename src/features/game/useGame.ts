import { useCallback, useState } from 'react'
import { DROPS_LIST, DROPS_SCORE_MAP } from './constants'
import { IDrops } from './types'

export const useGame = () => {
    const [isStarted, setIsStarted] = useState(false)
    const [dropsList, setDropsList] = useState<IDrops[]>([])
    const [score, setScore] = useState(0)

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

    const removeDrops = (dropsList: IDrops[], index: number) => {
        const newList = [...dropsList]
        newList.splice(index, 1)
        return newList
    }

    const spawnDrops = useCallback(() => {
        console.log('spawnDrops')
        setDropsList((oldList) => [...oldList, createDrops()])
    }, [])

    const onDropsCaugth = (index: number) => {
        setScore(score + dropsList[index].score)
        setDropsList(removeDrops(dropsList, index))
    }

    // TODO: delete unused output
    return {
        isStarted,
        setIsStarted,
        dropsList,
        setDropsList,
        score,
        setScore,
        spawnDrops,
        onDropsCaugth,
    }
}
