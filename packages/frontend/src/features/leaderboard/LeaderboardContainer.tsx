import styled from 'styled-components'
import { Leaderboard } from '../../components/leaderboard/Leaderboard'
import {
    closeLeaderboardAction,
    isLeaderboardOpenedSelector,
} from '../../store/slice'
import { useSelector, useDispatch } from 'react-redux'

const SLeaderboardWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const mockedRecords = [
    { name: 'apple', score: 12345 },
    { name: 'bsado', score: 10345 },
    { name: 'cnuw', score: 9554 },
    { name: 'decjio', score: 6782 },
    { name: 'efni', score: 5789 },
    { name: 'fefjeiso', score: 4458 },
    { name: 'gajido', score: 3002 },
    { name: 'hajido', score: 2002 },
    { name: 'iajido', score: 1002 },
    { name: 'jajido', score: 902 },
    { name: 'kajido', score: 802 },
]

export const LeaderboardContainer = () => {
    const isOpened = useSelector(isLeaderboardOpenedSelector)
    const dispatch = useDispatch()

    const closeLeaderboard = () => {
        dispatch(closeLeaderboardAction())
    }

    return isOpened ? (
        <SLeaderboardWrapper>
            <Leaderboard
                leaderRecords={mockedRecords}
                onPreviousButton={closeLeaderboard}
            />
        </SLeaderboardWrapper>
    ) : (
        <></>
    )
}
