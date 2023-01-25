import styled from 'styled-components'

const SDrops = styled.img<{ x: number; y: number }>`
    position: absolute;
    width: 40px;
    height: 40px;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
`

export const Drop = ({
    image,
    x,
    y,
}: // index,
// score,
{
    image: string
    x: number
    y: number
    // index: number
    // score: number
}) => {
    return <SDrops src={image} x={x} y={y} />
}
