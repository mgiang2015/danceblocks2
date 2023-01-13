import { configureStore } from '@reduxjs/toolkit'
import StorageApi from '../model/storageApi';
import appStateReducer from './stateSlice'

export const store = configureStore({
    reducer: {
        appState: appStateReducer
    }
})

store.subscribe(() => StorageApi.storeState(store.getState().appState))

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

