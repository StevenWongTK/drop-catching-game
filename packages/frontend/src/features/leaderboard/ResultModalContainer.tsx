import { useDispatch, useSelector } from 'react-redux'
import { ResultModal } from '../../components/result-modal/ResultModal'
import {
    closeGameFieldAction,
    closeResultModalAction,
    isResultModalOpenedSelector,
    openLeaderboardAction,
    openMenuAction,
} from '../../store/slice'
import { setRecord } from '../../api/api'
import { useEffect, useContext } from 'react'
import { scoreContext } from '../../App'

export const ResultModalContainer = () => {
const SResultModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
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
        <SResultModalContainer>
            <ResultModal score={score} onSendButton={handleSend}></ResultModal>
        </SResultModalContainer>
    ) : (
        <></>
    )
}
