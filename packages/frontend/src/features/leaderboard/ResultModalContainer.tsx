import { useDispatch, useSelector } from 'react-redux'
import { ResultModal } from '../../components/result-modal/ResultModal'
import {
    closeGameFieldAction,
    isResultModalOpenedSelector,
    openMenuAction,
    startGameAction,
} from '../../store/slice'
import { setRecord } from '../../api/api'
import { useEffect } from 'react'

export const ResultModalContainer = () => {
    const isNewRecord = true
    const score = 123
    const dispatch = useDispatch()
    const isOpened = useSelector(isResultModalOpenedSelector)

    useEffect(() => console.log('isOpened?:', isOpened), [isOpened])

    const handleStartGame = (name?: string) => {
        isNewRecord && setRecord({ name: name || '', score })
        dispatch(startGameAction)
    }

    const handleBackToMenu = (name?: string) => {
        isNewRecord && setRecord({ name: name || '', score })
        dispatch(closeGameFieldAction)
        dispatch(openMenuAction)
    }

    return isOpened ? (
        <ResultModal
            score={score}
            isNewRecord={isNewRecord}
            onStartGameButton={handleStartGame}
            onBackToMenuButton={handleBackToMenu}
        ></ResultModal>
    ) : (
        <></>
    )
}