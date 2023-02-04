import { useEffect, useRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { scoreContext } from '../../App'
import { useGame } from './useGame'
import { CATCHER_SIZE } from './constants'
import Catcher from '../../components/catcher/Catcher'
import Drop from '../../components/drop/Drop'
import { isGameFieldOpenedSelector } from '../../store/slice'
import bg1 from '../../assets/bg1.png'

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

const Game = () => {
    const isOpened = useSelector(isGameFieldOpenedSelector)
    const fieldRef = useRef<HTMLDivElement>(null)
    const { score } = useContext(scoreContext)
    const { initGame, drops, catcher, onCursorMove } = useGame(fieldRef)

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

export default Game
