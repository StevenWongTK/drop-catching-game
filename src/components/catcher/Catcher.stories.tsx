import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Catcher } from './Catcher'
import boat from '../../assets/boat.png'

export default {
    title: 'Catcher',
    component: Catcher,
} as ComponentMeta<typeof Catcher>

export const Default: ComponentStory<typeof Catcher> = () => (
    <Catcher image={boat} x={50} y={50} size={40} />
)
