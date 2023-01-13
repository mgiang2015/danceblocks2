interface Dancer {
    id: number
    name: string
    color: string
    xCoord: number
    yCoord: number
}

interface Blocking {
    id: number
    name: string
    dancerCount: number
    dancers: Dancer[]
}

interface AppState {
    blockingCount: number
    blockings: Blocking[]
    currentBlockingId: number
    view3d: boolean
}