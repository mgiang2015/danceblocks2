import { createSlice } from "@reduxjs/toolkit";
import { addNewBlocking, addNewDefaultBlocking, addNewDefaultDancer, findCurrentBlocking } from "../model/factory";
import { RootState } from "./store";

const initialState: () => AppState = () => {
    let state: AppState = {
        blockingCount: 0,
        blockings: [],
        currentBlockingId: -1
    }

    addNewDefaultBlocking(state)
    addNewDefaultDancer(findCurrentBlocking(state) || state.blockings[0])
    return state;
}

export const stateSlice = createSlice({
    name: 'state',
    initialState: initialState,
    reducers: {
        addBlocking: (state) => {
            addNewBlocking(state);
        },
        addDancer: (state) => {
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                addNewDefaultDancer(currentBlocking);
            }
        }
    }
})

export const { addBlocking, addDancer } = stateSlice.actions
export const selectState = (state: RootState) => state.blockings

export default stateSlice.reducer