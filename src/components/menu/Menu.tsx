import styled from 'styled-components'
import { MenuButton } from '../menu-button/MenuButton'

const SMenu = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const STitle = styled.div`
    font-family: 'Courier New', monospace;
    font-size: 100px;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
`

const onClick = () => {
    console.log('click')
}

export const Menu = () => {
    return (
        <SMenu>
            <STitle>{'Game'}</STitle>
            <MenuButton label='Start Game' onClick={onClick} />
            <MenuButton label='Leaderboard' onClick={onClick} />
        </SMenu>
    )
}
