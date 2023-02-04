import { useDispatch, useSelector } from 'react-redux'
import Menu from '../../components/menu/Menu'
import {
    closeMenuAction,
    isMenuOpenedSelector,
    openGameFieldAction,
    openLeaderboardAction,
    openTutorialAction,
    startGameAction,
} from '../../store/slice'
import { SModalWrapper } from '../../components/modal-wrapper/style'

const MenuContainer = () => {
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
        <SModalWrapper>
            <Menu
                onStartGameButton={startGame}
                onOpenLeaderboardButton={openLeaderboard}
            />
        </SModalWrapper>
    ) : (
        <></>
    )
}

export default MenuContainer
