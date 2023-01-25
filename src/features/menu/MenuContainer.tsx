import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import {
    closeMenuAction,
    isMenuOpenedSelector,
    openGameFieldAction,
    openLeaderboardAction,
} from '../../store/slice'
import { useDispatch, useSelector } from 'react-redux'

const SMenuWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const MenuContainer = () => {
    const isMenuOpened = useSelector(isMenuOpenedSelector)
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(closeMenuAction())
        dispatch(openGameFieldAction())
    }

    const openLeaderboard = () => {
        dispatch(openLeaderboardAction())
    }

    return isMenuOpened ? (
        <SMenuWrapper>
            <Menu
                onStartGameButton={startGame}
                onOpenLeaderboardButton={openLeaderboard}
            />
        </SMenuWrapper>
    ) : (
        <></>
    )
}
