import { createSlice, createSelector } from '@reduxjs/toolkit'

interface IStore {
    isMenuOpened: boolean
    isLeaderboardOpened: boolean
    isGameFieldOpened: boolean
}

const initialState = {
    isMenuOpened: true,
    isLeaderboardOpened: false,
    isGameFieldOpened: false,
} as IStore

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        // TODO: Combine some of action later
        openMenuAction: (state) => {
            state.isMenuOpened = true
        },
        closeMenuAction: (state) => {
            state.isMenuOpened = false
        },
        openLeaderboardAction: (state) => {
            state.isLeaderboardOpened = true
        },
        closeLeaderboardAction: (state) => {
            state.isLeaderboardOpened = false
        },
        openGameFieldAction: (state) => {
            state.isGameFieldOpened = true
        },
    },
})

const selfSelector = (state: { store: IStore }) => state.store
const isMenuOpenedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isMenuOpened
)
const isLeaderboardOpenedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isLeaderboardOpened
)
const isGameFieldOpenedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isGameFieldOpened
)

export const {
    openMenuAction,
    closeMenuAction,
    openLeaderboardAction,
    closeLeaderboardAction,
    openGameFieldAction,
} = storeSlice.actions
export {
    isMenuOpenedSelector,
    isLeaderboardOpenedSelector,
    isGameFieldOpenedSelector,
}
export default storeSlice.reducer
