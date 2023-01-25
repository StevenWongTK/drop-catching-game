import { useEffect, useRef } from 'react'
import { Drop } from '../../components/Drop/Drop'
import { useGame } from './useGame'
import { DROP_INTERVAL } from './constants'
import styled from 'styled-components'
import { Catch } from '../../components/Catch/Catch'

const SField = styled.div`
    width: 500px;
    height: 500px;
    border: 1px solid #000;
`

export const Game = () => {
    const fieldRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const requestRef = useRef<number>(0)

    const {
        isStarted,
        setIsStarted,
        drops,
        spawnDrops,
        catchX,
        onCursorMove,
        advanceStep,
    } = useGame(fieldRef, requestRef)

    useEffect(() => {
        const stop = () => {
            intervalRef.current && clearInterval(intervalRef.current)
            requestRef.current && cancelAnimationFrame(requestRef.current)
        }
        if (isStarted) {
            console.log('looping')
            intervalRef.current = setInterval(spawnDrops, DROP_INTERVAL)
            requestRef.current = requestAnimationFrame(advanceStep)
        } else {
            stop()
        }
        return () => stop()
    }, [advanceStep, isStarted, spawnDrops])

    return (
        <SField className='field' ref={fieldRef} onMouseMove={onCursorMove}>
            <button onClick={() => setIsStarted(!isStarted)}>{'start'}</button>
            {drops.map((drop, index) => {
                //TODO 20 is hardcoded
                const x = fieldRef.current
                    ? ((fieldRef.current.offsetWidth - 20) * drop.x) / 100
                    : drop.x
                return (
                    <Drop
                        key={`drop-${index}`}
                        {...drop}
                        x={x}
                        // index={index}
                        // onClick={onDotClick}
                    />
                )
            })}
            <Catch x={catchX} y={400}></Catch>
        </SField>
    )
}
