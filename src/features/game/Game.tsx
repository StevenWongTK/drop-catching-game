import { useCallback, useEffect, useRef } from 'react'
import { Drops } from '../../components/Drops/Drops'
import { useGame } from './useGame'
import { DROP_SPEED, DROP_INTERVAL } from './constants'
import styled from 'styled-components'

const SField = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid #000;
`

export const Game = () => {
    const {
        isStarted,
        setIsStarted,
        dropsList,
        setDropsList,
        // onDropsCaugth,
        spawnDrops,
    } = useGame()
    const fieldRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const requestRef = useRef<number>(0)

    const advanceStep = useCallback(() => {
        setDropsList((oldList) => {
            const newDropsList = []
            for (const drops of oldList) {
                console.log('has drops')
                const newY = drops.y + DROP_SPEED / 60
                console.log('newY', newY)
                if (fieldRef.current && newY <= fieldRef.current.offsetHeight) {
                    newDropsList.push({
                        ...drops,
                        y: newY,
                    })
                }
            }
            return newDropsList
        })

        requestRef.current = requestAnimationFrame(advanceStep)
    }, [setDropsList])

    useEffect(() => {
        const stop = () => {
            intervalRef.current && clearInterval(intervalRef.current)
            requestRef.current && cancelAnimationFrame(requestRef.current)
        }
        if (isStarted) {
            intervalRef.current = setInterval(spawnDrops, DROP_INTERVAL)
            requestRef.current = requestAnimationFrame(advanceStep)
        } else {
            stop()
        }
        return () => stop()
    }, [advanceStep, isStarted, spawnDrops])

    return (
        <SField className='field' ref={fieldRef}>
            <button onClick={() => setIsStarted(!isStarted)}>{'start'}</button>
            {dropsList.map((drops, index) => {
                //TODO 20 is hardcoded
                const x = fieldRef.current
                    ? ((fieldRef.current.offsetWidth - 20) * drops.x) / 100
                    : drops.x
                return (
                    <Drops
                        key={`drops-${index}`}
                        {...drops}
                        x={x}
                        // index={index}
                        // onClick={onDotClick}
                    />
                )
            })}
        </SField>
    )
}
