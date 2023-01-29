import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ResultModal } from './ResultModal'

export default {
    title: 'ResultModal',
    component: ResultModal,
} as ComponentMeta<typeof ResultModal>

const startGame = () => {
    console.log('Start Game Button Clicked!')
}

const openLeaderboard = () => {
    console.log('Open Leaderboard Button Clicked!')
}

export const Default: ComponentStory<typeof ResultModal> = () => (
    <ResultModal
        isNewRecord={false}
        score={2000}
        onStartGameButton={startGame}
        onBackToMenuButton={openLeaderboard}
    />
)
export const NewRecord: ComponentStory<typeof ResultModal> = () => (
    <ResultModal
        isNewRecord={true}
        score={2000}
        onStartGameButton={startGame}
        onBackToMenuButton={openLeaderboard}
    />
)
