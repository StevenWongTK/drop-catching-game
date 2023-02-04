import styled from 'styled-components'

const SLeaderboardRow = styled.div`
    background-color: lightgrey;
    width: 200px;
    height: 40px;
    padding: 8px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`

const SName = styled.div`
    margin-left: 8px;
`

const SScore = styled.div`
    margin-left: auto;
`

const LeaderboardRow = ({
    rank,
    name,
    score,
}: {
    rank: number
    name: string
    score: number
}) => {
    return (
        <SLeaderboardRow>
            {rank} <SName>{name}</SName> <SScore>{score}</SScore>
        </SLeaderboardRow>
    )
}
export default LeaderboardRow
