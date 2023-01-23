import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuButton } from './MenuButton'

export default {
    title: 'MenuButton',
    component: MenuButton,
} as ComponentMeta<typeof MenuButton>

const onClick = () => {
    console.log('clicked')
}

export const Default: ComponentStory<typeof MenuButton> = () => (
    <MenuButton label='MenuButton' onClick={onClick} />
)
