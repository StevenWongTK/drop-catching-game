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
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #556e84;
    padding-top: 16px;
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
    padding-right: 4px;

    > * {
        flex-shrink: 0;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #1c242f;
        border-radius: 4px;
    }
`

const SPrevioudButton = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
`

export const Leaderboard = ({
    leaderRecords,
    onPreviousButton,
}: {
    leaderRecords: ILeaderRecord[]
    onPreviousButton: () => void
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
            <SPrevioudButton onClick={onPreviousButton}>{'<'}</SPrevioudButton>
        </SContainer>
    )
}
