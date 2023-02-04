import { ComponentStory, ComponentMeta } from '@storybook/react'
import Drop from './Drop'
import e1 from '../../assets/e1.png'

export default {
    title: 'Drop',
    component: Drop,
} as ComponentMeta<typeof Drop>

export const Default: ComponentStory<typeof Drop> = () => (
    <Drop image={e1} x={50} y={50} size={40} />
)
