import styled from 'styled-components'

const SMenuButton = styled.div`
    background-color: lightgreen;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const MenuButton = ({
    label,
    onClick,
}: {
    label: string
    onClick: () => void
}) => {
    return <SMenuButton onClick={onClick}>{label}</SMenuButton>
}
