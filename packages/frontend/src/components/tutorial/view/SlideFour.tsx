import { STutorialBackground } from './constants'
import { MenuButton } from '../../menu-button/MenuButton'
import { useDispatch } from 'react-redux'
import {
    closeTutorialAction,
    openGameFieldAction,
    startGameAction,
} from '../../../store/slice'

export const SlideFour = () => {
    const dispatch = useDispatch()

    const startGame = () => {
        dispatch(closeTutorialAction())
        localStorage.setItem('isTutorialSeen', 'true')
        dispatch(openGameFieldAction())
        dispatch(startGameAction())
    }

    return (
        <STutorialBackground>
            <div>
                <div>Dear Caption,</div>
                <p>You have 60 seconds to hunt.</p>
                <p>Wish you a fair wind ever and always.</p>
            </div>
            <MenuButton label="Let's Start!" onClick={startGame}></MenuButton>
        </STutorialBackground>
    )
}
