import styled from 'styled-components'
import { LeaderboardRow } from '../leaderboard-row/LeaderboardRow'
import { ILeaderRecord } from '../../features/leaderboard/type'

const SContainer = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

const STitle = styled.div`
    font-family: 'Courier New', monospace;
    font-size: 100px;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
`

const SRecordsContainer = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;

    > * {
        flex-shrink: 0;
    }
`

export const Leaderboard = ({
    leaderRecords,
}: {
    leaderRecords: ILeaderRecord[]
}) => {
    return (
        <SContainer>
            <STitle>{'Rank'}</STitle>
            <SRecordsContainer>
                {leaderRecords.map((record, i) => (
                    <LeaderboardRow
                        key={`record-${i}`}
                        rank={i + 1}
                        name={record.name}
                        score={record.score}
                    ></LeaderboardRow>
                ))}
            </SRecordsContainer>
        </SContainer>
    )
}
