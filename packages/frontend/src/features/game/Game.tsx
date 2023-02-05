import { useEffect, useRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { scoreContext } from '../../App'
import { useGame } from './useGame'
import { CATCHER_SIZE, BACKGROUND_RATIO, CATCHER_STARTING_Y } from './constants'
import Catcher from '../../components/catcher/Catcher'
import Drop from '../../components/drop/Drop'
import { isGameFieldOpenedSelector } from '../../store/slice'
import bg1 from '../../assets/bg1.png'
import { getResponsiveWidth, getResponsiveHeight } from './helper'

const SPageContainer = styled.div`
    width: 100%;
    height: 100%;
`

const calculateFieldSize = (
    width: number,
    height: number,
    backgroundRatio: number
) => {
    if (width * backgroundRatio > height) {
        return css`
            width: calc(${height} / ${backgroundRatio} * 1px);
            height: calc(${height} * 1px);
        `
    } else {
        return css`
            width: calc(${width} * 1px);
            height: calc(${width} * ${backgroundRatio} * 1px);
        `
    }
}

const SField = styled.div<{
    src: string
    pageWidth: number
    pageHeight: number
    backgroundRatio: number
}>`
    ${(props) =>
        calculateFieldSize(
            props.pageWidth,
            props.pageHeight,
            props.backgroundRatio
        )}
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${(props) => props.src});
    background-size: cover;
    overflow: hidden;
`

const Game = () => {
    const isOpened = useSelector(isGameFieldOpenedSelector)
    const pageRef = useRef<HTMLDivElement>(null)
    const fieldRef = useRef<HTMLDivElement>(null)
    const fieldWidth = fieldRef.current?.offsetWidth || 0
    const fieldHeight = fieldRef.current?.offsetHeight || 0
    const { score } = useContext(scoreContext)
    const { initGame, drops, catcher, onCursorMove, onTouchMove } =
        useGame(fieldRef)

    useEffect(() => {
        initGame()
    }, [initGame, isOpened])

    return isOpened ? (
        <SPageContainer ref={pageRef}>
            <SField
                src={bg1}
                ref={fieldRef}
                pageWidth={pageRef.current?.offsetWidth || 0}
                pageHeight={pageRef.current?.offsetHeight || 0}
                backgroundRatio={BACKGROUND_RATIO}
                onMouseMove={onCursorMove}
                onTouchMove={onTouchMove}
            >
                <div>{`Score: ${score}`}</div>
                {drops.map((drop, index) => {
                    return (
                        <Drop
                            key={`drop-${index}`}
                            image={drop.image}
                            x={getResponsiveWidth(drop.x, fieldWidth)}
                            y={getResponsiveHeight(drop.y, fieldHeight)}
                            size={getResponsiveWidth(drop.size, fieldWidth)}
                        />
                    )
                })}
                <Catcher
                    image={catcher.image}
                    x={getResponsiveWidth(catcher.x, fieldWidth)}
                    y={getResponsiveHeight(CATCHER_STARTING_Y, fieldHeight)}
                    size={getResponsiveWidth(CATCHER_SIZE, fieldWidth)}
                ></Catcher>
            </SField>
        </SPageContainer>
    ) : (
        <></>
    )
}

export default Game
