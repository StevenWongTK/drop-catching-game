import styled from 'styled-components'
import { MenuButton } from '../menu-button/MenuButton'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../store/slice'

const SMenu = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #556e84;
`

const STitle = styled.div`
    font-family: 'Courier New', monospace;
    font-size: 100px;
    color: #1c242f;
    border-bottom: 1px solid #1c242f;
    margin-bottom: 20px;
`

const onClick = () => {
    console.log('click')
}

export const Menu = () => {
    const dispatch = useDispatch()
    return (
        <SMenu>
            <STitle>{'Game'}</STitle>
            <MenuButton
                label='Start Game'
                onClick={() => dispatch(closeMenu())}
            />
            <MenuButton label='Leaderboard' onClick={onClick} />
        </SMenu>
    )
}
