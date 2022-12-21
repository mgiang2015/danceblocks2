import { configureStore } from '@reduxjs/toolkit'
import blockingsReducer from './stateSlice'

export const store = configureStore({
    reducer: {
        blockings: blockingsReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

