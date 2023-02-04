import { useEffect, useRef, useContext } from 'react'
import { Drop } from '../../components/drop/Drop'
import { useGame } from './useGame'
import { CATCHER_SIZE, DROP_INTERVAL, GAME_DURATION } from './constants'
import styled from 'styled-components'
import { Catcher } from '../../components/catcher/Catcher'
import { useDispatch, useSelector } from 'react-redux'
import {
    endGameAction,
    isGameFieldOpenedSelector,
    isGameStartedSelector,
    openResultModalAction,
} from '../../store/slice'
import bg1 from '../../assets/bg1.png'
import { scoreContext } from '../../App'

const SField = styled.div<{ src: string }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    background-image: url(${(props) => props.src});
    background-size: cover;
    overflow: hidden;
`

export const Game = () => {
    const isOpened = useSelector(isGameFieldOpenedSelector)
    const isGameStarted = useSelector(isGameStartedSelector)
    const dispatch = useDispatch()
    const fieldRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval>>()
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
    const requestRef = useRef<number>(0)
    const { score } = useContext(scoreContext)

    const { initGame, drops, spawnDrops, catcher, onCursorMove, advanceStep } =
        useGame(fieldRef, requestRef)

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
            // console.log('looping')
            requestRef.current = requestAnimationFrame(advanceStep)
        } else {
            stop()
        }
        return () => stop()
    }, [advanceStep, isGameStarted])

    useEffect(() => {
        initGame()
    }, [initGame, isOpened])

    return isOpened ? (
        <SField src={bg1} ref={fieldRef} onMouseMove={onCursorMove}>
            <div>{`Score: ${score}`}</div>
            {drops.map((drop, index) => {
                return <Drop key={`drop-${index}`} {...drop} />
            })}
            <Catcher
                image={catcher.image}
                x={catcher.x}
                y={400}
                size={CATCHER_SIZE}
            ></Catcher>
        </SField>
    ) : (
        <></>
    )
}
