import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tutorial } from './Tutorial'
import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../../store/slice'
import { Provider } from 'react-redux'

const store = configureStore({ reducer: { store: storeReducer } })

export default {
    title: 'Tutorial',
    component: Tutorial,
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Tutorial>

export const Default: ComponentStory<typeof Tutorial> = () => <Tutorial />
