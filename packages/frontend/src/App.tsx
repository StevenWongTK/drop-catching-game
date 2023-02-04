import styled from 'styled-components'
import bg2 from './assets/bg2.png'
import { MenuContainer } from './features/menu/MenuContainer'
import { LeaderboardContainer } from './features/leaderboard/LeaderboardContainer'
import { TutorialContainer } from './features/tutorial/TutorialContainer'
import { Game } from './features/game/Game'
import { ResultModalContainer } from './features/leaderboard/ResultModalContainer'
import { useState, createContext } from 'react'

// TODO: remove
// #1c242f
// #556e84

type IScoreContext = {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}
export const scoreContext = createContext<IScoreContext>({
    score: 0,
    setScore: () => {},
})

const SApp = styled.div<{ src: string }>`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.src});
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
