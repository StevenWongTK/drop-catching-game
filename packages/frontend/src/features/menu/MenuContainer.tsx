import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import {
    closeMenuAction,
    isMenuOpenedSelector,
    openGameFieldAction,
    openLeaderboardAction,
    openTutorialAction,
    startGameAction,
} from '../../store/slice'
import { useDispatch, useSelector } from 'react-redux'

const SMenuWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const MenuContainer = () => {
    const isOpened = useSelector(isMenuOpenedSelector)
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(closeMenuAction())
        if (localStorage.getItem('isTutorialSeen') === 'true') {
            dispatch(openGameFieldAction())
            dispatch(startGameAction())
        } else {
            dispatch(openTutorialAction())
        }
    }

    const openLeaderboard = () => {
        dispatch(openLeaderboardAction())
    }

    return isOpened ? (
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
