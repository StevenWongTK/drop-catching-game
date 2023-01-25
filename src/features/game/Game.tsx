import { useEffect, useRef } from 'react'
import { Drop } from '../../components/drop/Drop'
import { useGame } from './useGame'
import { CATCHER_SIZE, DROP_INTERVAL } from './constants'
import styled from 'styled-components'
import { Catcher } from '../../components/catcher/Catcher'

const SField = styled.div`
    position: relative;
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
        catcher,
        score,
        onCursorMove,
        advanceStep,
    } = useGame(fieldRef, requestRef)

    useEffect(() => {
        const stop = () => {
            intervalRef.current && clearInterval(intervalRef.current)
        }
        if (isStarted) {
            intervalRef.current = setInterval(spawnDrops, DROP_INTERVAL)
        } else {
            stop()
        }
        return () => stop()
    }, [isStarted, spawnDrops])

    useEffect(() => {
        const stop = () => {
            requestRef.current && cancelAnimationFrame(requestRef.current)
        }
        if (isStarted) {
            console.log('looping')
            requestRef.current = requestAnimationFrame(advanceStep)
        } else {
            stop()
        }
        return () => stop()
    }, [advanceStep, isStarted])

    return (
        <SField ref={fieldRef} onMouseMove={onCursorMove}>
            <button onClick={() => setIsStarted(!isStarted)}>{'start'}</button>
            <div>{`Score: ${score}`}</div>
            {drops.map((drop, index) => {
                return (
                    <Drop
                        key={`drop-${index}`}
                        {...drop}
                        // index={index}
                        // onClick={onDotClick}
                    />
                )
            })}
            <Catcher
                image={catcher.image}
                x={catcher.x}
                y={400}
                size={CATCHER_SIZE}
            ></Catcher>
        </SField>
    )
}
