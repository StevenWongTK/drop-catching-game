import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultModal from '../../components/result-modal/ResultModal'
import {
    closeGameFieldAction,
    closeResultModalAction,
    isResultModalOpenedSelector,
    openLeaderboardAction,
    openMenuAction,
} from '../../store/slice'
import { setRecords } from '../../api/api'
import { scoreContext } from '../../App'
import { SModalWrapper } from '../../components/modal-wrapper/style'

const ResultModalContainer = () => {
    const dispatch = useDispatch()
    const isOpened = useSelector(isResultModalOpenedSelector)
    const { score } = useContext(scoreContext)

    const handleSend = (name?: string) => {
        name && setRecords({ name: name || '', score })
        dispatch(closeResultModalAction())
        dispatch(closeGameFieldAction())
        dispatch(openMenuAction())
        dispatch(openLeaderboardAction())
    }

    return isOpened ? (
        <SModalWrapper>
            <ResultModal score={score} onSendButton={handleSend}></ResultModal>
        </SModalWrapper>
    ) : (
        <></>
    )
}

export default ResultModalContainer
