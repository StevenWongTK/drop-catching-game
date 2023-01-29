import { useDispatch } from 'react-redux'
import { ResultModal } from '../../components/result-modal/ResultModal'
import {
    closeGameFieldAction,
    openMenuAction,
    startGameAction,
} from '../../store/slice'

export const ResultModalContainer = () => {
    const isNewRecord = false
    const score = 123
    const dispatch = useDispatch()

    const saveScore = (name: string, score: number) => {
        console.log(name + score)
    }
    const handleStartGame = (name?: string) => {
        isNewRecord && saveScore(name || '', score)
        dispatch(startGameAction)
    }

    const handleBackToMenu = (name?: string) => {
        isNewRecord && saveScore(name || '', score)
        dispatch(closeGameFieldAction)
        dispatch(openMenuAction)
    }

    return (
        <ResultModal
            score={123}
            isNewRecord={isNewRecord}
            onStartGameButton={handleStartGame}
            onBackToMenuButton={handleBackToMenu}
        ></ResultModal>
    )
}
