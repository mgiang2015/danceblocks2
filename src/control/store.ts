import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './stateSlice'

export const store = configureStore({
    reducer: {
        appState: appStateReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

