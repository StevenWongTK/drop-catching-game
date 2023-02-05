import { useState, createContext } from 'react'
import styled from 'styled-components'
import bg2 from './assets/bg2.png'
import MenuContainer from './features/menu/MenuContainer'
import LeaderboardContainer from './features/leaderboard/LeaderboardContainer'
import TutorialContainer from './features/tutorial/TutorialContainer'
import Game from './features/game/Game'
import ResultModalContainer from './features/leaderboard/ResultModalContainer'

type IScoreContext = {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}
export const scoreContext = createContext<IScoreContext>({
    score: 0,
    setScore: () => {},
})

const SApp = styled.div<{ src: string }>`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.src});
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const App = () => {
    const [score, setScore] = useState(0)
    return (
        <scoreContext.Provider value={{ score, setScore }}>
            <SApp src={bg2}>
                <Game />
                <TutorialContainer />
                <MenuContainer />
                <LeaderboardContainer />
                <ResultModalContainer />
            </SApp>
        </scoreContext.Provider>
    )
}

export default App
