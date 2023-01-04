import { createSlice } from "@reduxjs/toolkit";
import { addNewBlocking, addNewDefaultBlocking, addNewDefaultDancer, deleteBlockingFromState, deleteDancerFromBlocking, findCurrentBlocking, moveBlockingToNewIndex, updateBlockingName, updateCurrentBlockingId, updateDancerColor, updateDancerCoord, updateDancerName } from "../model/util";
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
        renameBlocking: (state, action) => {
            let payload: { id: number, name: string } = action.payload;
            updateBlockingName(state, payload.id, payload.name);
        },
        deleteBlocking: (state, action) => {
            let payload: { id: number } = action.payload;
            const deletedIndex = deleteBlockingFromState(state, payload.id);

            // set currentBlocking to another blocking
            if (payload.id === state.currentBlockingId && state.blockings.length > 0) {
                let nextBlockingIndex = deletedIndex <= 0 ? 0 : deletedIndex - 1;
                state.currentBlockingId = state.blockings[nextBlockingIndex].id;
            } else if (state.blockings.length === 0) {
                addNewDefaultBlocking(state)
            }
        },
        changeCurrentBlocking: (state, action) => {
            let payload: {id: number} = action.payload;
            updateCurrentBlockingId(state, payload.id);
        },
        moveBlocking: (state, action) => {
            let payload: { oldIndex: number, targetIndex: number } = action.payload;
            moveBlockingToNewIndex(state, payload.oldIndex, payload.targetIndex);
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

export const { addBlocking, renameBlocking, deleteBlocking, changeCurrentBlocking, addDancer, moveDancer, renameDancer, changeDancerColor, deleteDancer, moveBlocking } = stateSlice.actions
export const selectState = (state: RootState) => state.blockings
export const selectBlockings = (state: RootState) => state.blockings.blockings
export const selectCurrentBlocking = (state: RootState) => findCurrentBlocking(state.blockings)

export default stateSlice.reducer