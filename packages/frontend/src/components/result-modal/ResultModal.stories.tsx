import { ComponentStory, ComponentMeta } from '@storybook/react'
import ResultModal from './ResultModal'

export default {
    title: 'ResultModal',
    component: ResultModal,
} as ComponentMeta<typeof ResultModal>

const handleSend = () => {
    console.log('Sent!')
}

export const Default: ComponentStory<typeof ResultModal> = () => (
    <ResultModal score={2000} onSendButton={handleSend} />
)
