import styled from 'styled-components'

const SMenuButton = styled.div`
    background-color: #1c242f;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
`

const MenuButton = ({
    label,
    onClick,
}: {
    label: string
    onClick: () => void
}) => {
    return <SMenuButton onClick={onClick}>{label}</SMenuButton>
}

export default MenuButton
