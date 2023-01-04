const NEW_DANCER_NAME = "New Dancer";
const NEW_DANCER_COLOR = "#A020F0";
const NEW_BLOCKING_NAME = "New Blocking";
const NEW_DANCER_XCOORD = 100
const NEW_DANCER_YCOORD = 100

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

function updateDancerCoord(blocking: Blocking, dancerId: number, offsetX: number, offsetY: number) {
    let dancer = blocking.dancers.find((dancer) => dancer.id === dancerId);
    if (dancer) {
        dancer.xCoord += offsetX;
        dancer.yCoord += offsetY;
    }
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

export { addNewDefaultDancer, addNewDancer, findCurrentBlocking, addNewDefaultBlocking, addNewBlocking, updateDancerCoord, getWindowDimensions, updateDancerName, updateDancerColor, deleteDancerFromBlocking, updateBlockingName, deleteBlockingFromState, updateCurrentBlockingId}