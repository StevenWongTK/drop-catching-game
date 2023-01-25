import { createSlice, createSelector } from '@reduxjs/toolkit'

interface IStore {
    isMenuOpened: boolean
}

const initialState = {
    isMenuOpened: true,
} as IStore

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isMenuOpened = true
        },
        closeMenu: (state) => {
            state.isMenuOpened = false
        },
    },
})

const selfSelector = (state: { store: IStore }) => state.store
const isMenuOpenedSelector = createSelector(
    selfSelector,
    (state: IStore) => state.isMenuOpened
)

export const { openMenu, closeMenu } = storeSlice.actions
export { isMenuOpenedSelector }
export default storeSlice.reducer
