import styled from 'styled-components'

const SCatcher = styled.img<{ x: number; y: number; size: number }>`
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    transform: translate(-50%, -50%);
`

const Catcher = ({
    image,
    x,
    y,
    size,
}: {
    image: string
    x: number
    y: number
    size: number
}) => {
    return <SCatcher src={image} x={x} y={y} size={size} />
}

export default Catcher
