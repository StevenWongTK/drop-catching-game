import styled from 'styled-components'
import boat from '../../assets/boat.png'

const SCatch = styled.img<{ x: number; y: number }>`
    position: absolute;
    width: 40px;
    height: 40px;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    transform: translateX(-50%);
`

export const Catch = ({ x, y }: { x: number; y: number }) => {
    return <SCatch src={boat} x={x} y={y} />
}
