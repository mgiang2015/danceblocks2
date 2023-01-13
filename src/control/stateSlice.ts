import { createSlice } from "@reduxjs/toolkit";
import StorageApi from "../model/storageApi";
import { addNewBlocking, addNewDefaultBlocking, addNewDefaultDancer, deleteBlockingFromState, deleteDancerFromBlocking, findCurrentBlocking, moveBlockingToNewIndex, updateBlockingName, updateCurrentBlockingId, updateDancerColor, updateDancerCoord, updateDancerName } from "../model/util";
import { MaxStageDepth, MaxStageWidth } from "./const";
import { RootState } from "./store";

const initialState: () => AppState = () => {
    if (StorageApi.getState()) {
        return StorageApi.getState()!;
    }

    let state: AppState = {
        blockingCount: 0,
        blockings: [],
        currentBlockingId: -1,
        view3d: false,
        stageWidth: MaxStageWidth,
        stageDepth: MaxStageDepth
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
        },
        // stage
        toggle3d: (state) => {
            const current3d = state.view3d;
            state.view3d = !current3d;
        },
        // the whole state
        setNewState: (state, action) => {
            let payload: { newState: AppState } = action.payload;
            state.blockingCount = payload.newState.blockingCount;
            state.currentBlockingId = payload.newState.currentBlockingId;
            state.blockings = payload.newState.blockings;
        }
    }
})

export const { addBlocking, renameBlocking, deleteBlocking, changeCurrentBlocking, addDancer, moveDancer, renameDancer, changeDancerColor, deleteDancer, moveBlocking, toggle3d, setNewState } = stateSlice.actions
export const selectState = (state: RootState) => state.appState
export const selectBlockings = (state: RootState) => state.appState.blockings
export const selectCurrentBlocking = (state: RootState) => findCurrentBlocking(state.appState)
export const selectView3d = (state: RootState) => state.appState.view3d;

export default stateSlice.reducer