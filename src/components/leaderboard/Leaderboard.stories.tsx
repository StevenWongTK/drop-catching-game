import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Leaderboard } from './Leaderboard'

export default {
    title: 'Leaderboard',
    component: Leaderboard,
} as ComponentMeta<typeof Leaderboard>

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

export const Default: ComponentStory<typeof Leaderboard> = () => (
    <Leaderboard leaderRecords={mockedRecords} />
)
