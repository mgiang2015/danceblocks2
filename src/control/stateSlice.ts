import { createSlice } from "@reduxjs/toolkit";
import { addNewBlocking, addNewDefaultBlocking, addNewDefaultDancer, deleteDancerFromBlocking, findCurrentBlocking, updateDancerColor, updateDancerCoord, updateDancerName } from "../model/util";
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
        // blocking
        addBlocking: (state) => {
            addNewBlocking(state);
        },
        // dancer
        addDancer: (state) => {
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                addNewDefaultDancer(currentBlocking);
            }
        },
        moveDancer: (state, action) => {
            let payload: { id: number, x: number, y: number } = action.payload;
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                updateDancerCoord(currentBlocking, payload.id, payload.x, payload.y);
            }
        },
        renameDancer: (state, action) => {
            let payload: { id: number, name: string } = action.payload;
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                updateDancerName(currentBlocking, payload.id, payload.name);
            }
        },
        changeDancerColor: (state, action) => {
            let payload: { id: number, color: string } = action.payload;
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                updateDancerColor(currentBlocking, payload.id, payload.color);
            }
        },
        deleteDancer: (state, action) => {
            let payload: { id: number } = action.payload;
            let currentBlocking = findCurrentBlocking(state);
            if (currentBlocking) {
                deleteDancerFromBlocking(currentBlocking, payload.id);
            }
        }
    }
})

export const { addBlocking, addDancer, moveDancer, renameDancer, changeDancerColor, deleteDancer } = stateSlice.actions
export const selectState = (state: RootState) => state.blockings
export const selectBlockings = (state: RootState) => state.blockings.blockings
export const selectCurrentBlocking = (state: RootState) => findCurrentBlocking(state.blockings)

export default stateSlice.reducer