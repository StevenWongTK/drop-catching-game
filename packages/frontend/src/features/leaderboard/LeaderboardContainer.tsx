import styled from 'styled-components'
import { Leaderboard } from '../../components/leaderboard/Leaderboard'
import {
    closeLeaderboardAction,
    isLeaderboardOpenedSelector,
} from '../../store/slice'
import useLeaderboard from './useLeaderboard'

const SLeaderboardWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const LeaderboardContainer = () => {
    const isOpened = useSelector(isLeaderboardOpenedSelector)
    const dispatch = useDispatch()
    const { records } = useLeaderboard(isOpened)

    const closeLeaderboard = () => {
        dispatch(closeLeaderboardAction())
    }

    return isOpened ? (
        <SLeaderboardWrapper>
            <Leaderboard
                leaderRecords={records}
                onPreviousButton={closeLeaderboard}
            />
        </SLeaderboardWrapper>
    ) : (
        <></>
    )
}
