import { useSelector, useDispatch } from 'react-redux'
import Leaderboard from '../../components/leaderboard/Leaderboard'
import {
    closeLeaderboardAction,
    isLeaderboardOpenedSelector,
} from '../../store/slice'
import useLeaderboard from './useLeaderboard'
import { SModalWrapper } from '../../components/modal-wrapper/style'

const LeaderboardContainer = () => {
    const isOpened = useSelector(isLeaderboardOpenedSelector)
    const dispatch = useDispatch()
    const { records } = useLeaderboard(isOpened)

    const closeLeaderboard = () => {
        dispatch(closeLeaderboardAction())
    }

    return isOpened ? (
        <SModalWrapper>
            <Leaderboard
                leaderRecords={records}
                onPreviousButton={closeLeaderboard}
            />
        </SModalWrapper>
    ) : (
        <></>
    )
}

export default LeaderboardContainer
