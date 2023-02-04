import styled from 'styled-components'

const SDrops = styled.img<{ x: number; y: number; size: number }>`
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    transform: translate(-50%, -50%);
`

const Drop = ({
    image,
    x,
    y,
    size,
}: // index,
// score,
{
    image: string
    x: number
    y: number
    size: number
    // index: number
    // score: number
}) => {
    return <SDrops src={image} x={x} y={y} size={size} />
}

export default Drop
