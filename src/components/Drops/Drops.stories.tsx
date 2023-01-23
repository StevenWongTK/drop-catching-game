import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drops } from './Drops'
import e1 from '../../assets/e1.png'

export default {
    title: 'Drops',
    component: Drops,
} as ComponentMeta<typeof Drops>

export const Default: ComponentStory<typeof Drops> = () => (
    <Drops image={e1} x={50} y={50} />
)
