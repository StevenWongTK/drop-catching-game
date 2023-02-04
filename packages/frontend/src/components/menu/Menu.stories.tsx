import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './Menu'

export default {
    title: 'Menu',
    component: Menu,
} as ComponentMeta<typeof Menu>

const startGame = () => {
    console.log('Start Game Button Clicked!')
}

const openLeaderboard = () => {
    console.log('Open Leaderboard Button Clicked!')
}

export const Default: ComponentStory<typeof Menu> = () => (
    <Menu
        onStartGameButton={startGame}
        onOpenLeaderboardButton={openLeaderboard}
    />
)
