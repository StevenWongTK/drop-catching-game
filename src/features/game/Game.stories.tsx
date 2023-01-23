import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Game } from './Game'

export default {
    title: 'Game',
    component: Game,
} as ComponentMeta<typeof Game>

export const Default: ComponentStory<typeof Game> = () => <Game />
