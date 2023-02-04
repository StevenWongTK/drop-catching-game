import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import Tutorial from './Tutorial'
import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../../store/slice'

const store = configureStore({ reducer: { store: storeReducer } })

export default {
    title: 'Tutorial',
    component: Tutorial,
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Tutorial>

export const Default: ComponentStory<typeof Tutorial> = () => <Tutorial />
