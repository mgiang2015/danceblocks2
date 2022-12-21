const NEW_DANCER_NAME = "New Dancer";
const NEW_DANCER_COLOR = "#A020F0";
const NEW_BLOCKING_NAME = "New Blocking";

function addNewDefaultDancer(blocking: Blocking) {
    let id = blocking.dancerCount
    let newDancer: Dancer = {
        id: id,
        name: NEW_DANCER_NAME,
        color: NEW_DANCER_COLOR,
        xCoord: 0,
        yCoord: 0
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
        xCoord: xCoord || 0,
        yCoord: yCoord || 0
    };
    blocking.dancerCount += 1;
    blocking.dancers.push(newDancer);
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

export { addNewDefaultDancer, addNewDancer, findCurrentBlocking, addNewDefaultBlocking, addNewBlocking }