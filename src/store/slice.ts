import { createSlice, createSelector } from '@reduxjs/toolkit'

interface IStore {
    isMenuOpened: boolean
    isLeaderboardOpened: boolean
    isGameFieldOpened: boolean
    isGameStarted: boolean
    isTutorialOpened: boolean
}

const initialState = {
    isMenuOpened: true,
    isLeaderboardOpened: false,
    isGameFieldOpened: false,
    isGameStarted: false,
    isTutorialOpened: false,
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
        startGameAction: (state) => {
            state.isGameStarted = true
        },
        endGameAction: (state) => {
            state.isGameStarted = false
        },
        openTutorialAction: (state) => {
            state.isTutorialOpened = true
        },
        closeTutorialAction: (state) => {
            state.isTutorialOpened = false
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
const isGameStartedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isGameStarted
)
const isTutorialOpenedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isTutorialOpened
)

export const {
    openMenuAction,
    closeMenuAction,
    openLeaderboardAction,
    closeLeaderboardAction,
    openGameFieldAction,
    startGameAction,
    endGameAction,
    openTutorialAction,
    closeTutorialAction,
} = storeSlice.actions
export {
    isMenuOpenedSelector,
    isLeaderboardOpenedSelector,
    isGameFieldOpenedSelector,
    isGameStartedSelector,
    isTutorialOpenedSelector,
}
export default storeSlice.reducer
