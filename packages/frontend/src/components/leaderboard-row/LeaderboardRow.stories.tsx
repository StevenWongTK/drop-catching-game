import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LeaderboardRow } from './LeaderboardRow'

export default {
    title: 'LeaderboardRow',
    component: LeaderboardRow,
} as ComponentMeta<typeof LeaderboardRow>

export const Default: ComponentStory<typeof LeaderboardRow> = () => (
    <LeaderboardRow rank={1} name={'Steven'} score={99999} />
)
