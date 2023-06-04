import { NEW_BLOCKING_NAME, NEW_DANCER_COLOR, NEW_DANCER_NAME, NEW_DANCER_XCOORD, NEW_DANCER_YCOORD } from "../control/const";

function addNewDefaultDancer(blocking: Blocking) {
    let id = blocking.dancerCount
    let newDancer: Dancer = {
        id: id,
        name: NEW_DANCER_NAME,
        color: NEW_DANCER_COLOR,
        xCoord: NEW_DANCER_XCOORD,
        yCoord: NEW_DANCER_YCOORD
    }

    blocking.dancerCount += 1;
    blocking.dancers.push(newDancer);
}

function addNewDancer(blocking: Blocking, name: string, color: string, xCoord?: number, yCoord?: number) {
    let id = blocking.dancerCount
    let newDancer: Dancer = {
        id: id,
        name: name,
        color: color,
        xCoord: xCoord || NEW_DANCER_XCOORD,
        yCoord: yCoord || NEW_DANCER_YCOORD
    };
    blocking.dancerCount += 1;
    blocking.dancers.push(newDancer);
}

function offsetDancerCoord(blocking: Blocking, dancerId: number, offsetX: number, offsetY: number) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);

    if (dancer) {
        dancer.xCoord += offsetX;
        dancer.yCoord += offsetY;
    }

    console.log("New coord: " + dancer?.xCoord + " " + dancer?.yCoord)
}

function setDancerCoord(blocking: Blocking, dancerId: number, newX: number, newY: number) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);

    if (dancer) {
        dancer.xCoord = newX;
        dancer.yCoord = newY;
    }

    console.log("New coord: " + dancer?.xCoord + " " + dancer?.yCoord)
}

function updateDancerName(blocking: Blocking, dancerId: number, name: string) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);
    if (dancer) {
        dancer.name = name;
    }   
}

function updateDancerColor(blocking: Blocking, dancerId: number, color: string) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);
    if (dancer) {
        dancer.color = color;
    }
}

function updateDancerAngle(blocking: Blocking, dancerId: number, angle: number) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);
    if (dancer) {
        dancer.angle = angle;
    }
}

function deleteDancerFromBlocking(blocking: Blocking, dancerId: number) {
    let dancerIndex = blocking.dancers.findIndex((dancer) => dancer.id === dancerId);
    if (dancerIndex > -1) {
        blocking.dancers.splice(dancerIndex, 1);
    }    
}

function updateBlockingName(state: AppState, blockingId: number, name: string) {
    let blocking = state.blockings.find((blocking) => blocking.id === blockingId);
    if (blocking) {
        blocking.name = name;
    }
}

function updateCurrentBlockingId(state: AppState, blockingId: number) {
    state.currentBlockingId = blockingId;
}

function deleteBlockingFromState(state: AppState, blockingId: number) {
    let blockingIndex = state.blockings.findIndex((blocking) => blocking.id === blockingId);
    if (blockingIndex > -1) {
        state.blockings.splice(blockingIndex, 1);
    }
    return blockingIndex;
}

function moveBlockingToNewIndex(state: AppState, oldIndex: number, targetIndex: number) {
    const blocking = state.blockings[oldIndex];
    state.blockings.splice(oldIndex, 1);
    state.blockings.splice(targetIndex, 0, blocking);
}

function findCurrentBlocking(state: AppState) {
    let blocking = state.blockings.find((blocking) => blocking.id === state.currentBlockingId);
    return blocking;
}

function addNewDefaultBlocking(state: AppState) {
    let id = state.blockingCount
    let newBlocking: Blocking = {
        id: id,
        name: NEW_BLOCKING_NAME,
        dancerCount: 0,
        dancers: []
    }
    state.blockingCount += 1;
    state.currentBlockingId = id;
    state.blockings.push(newBlocking);
}

function addNewBlocking(state: AppState) {
    let id = state.blockingCount
    let newBlocking: Blocking = {
        id: id,
        name: NEW_BLOCKING_NAME,
        dancerCount: 0,
        dancers: []
    }

    let currentBlocking = findCurrentBlocking(state);
    if (currentBlocking) {
        newBlocking.dancerCount = currentBlocking.dancerCount;
        for (let i = 0; i < currentBlocking.dancers.length; i++) {
            let dancer = currentBlocking.dancers[i];
            addNewDancer(newBlocking, dancer.name, dancer.color, dancer.xCoord, dancer.yCoord);
        }
    }

    state.blockingCount += 1;
    state.currentBlockingId = id;
    state.blockings.push(newBlocking);
}


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export { addNewDefaultDancer, addNewDancer, findCurrentBlocking, addNewDefaultBlocking, addNewBlocking, offsetDancerCoord, setDancerCoord, getWindowDimensions, updateDancerName, updateDancerColor, updateDancerAngle, deleteDancerFromBlocking, updateBlockingName, deleteBlockingFromState, updateCurrentBlockingId, moveBlockingToNewIndex}