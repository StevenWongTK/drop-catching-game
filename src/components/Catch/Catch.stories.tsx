import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Catch } from './Catch'

export default {
    title: 'Catch',
    component: Catch,
} as ComponentMeta<typeof Catch>

export const Default: ComponentStory<typeof Catch> = () => (
    <Catch x={50} y={50} />
)
