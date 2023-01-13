function debounce(func: Function, ms = 300) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function(this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), ms);
    }
}

function isAppState(obj: any): obj is AppState {
    return "blockings" in obj && "blockingCount" in obj && "currentBlockingId" in obj && "view3d" in obj;
}

function undebouncedStoreState(state: AppState) {
    localStorage.setItem("state", JSON.stringify(state));
}

class StorageApi {
    public static storeState = debounce(undebouncedStoreState);

    public static getState(): AppState | undefined {
        if (localStorage.getItem("state") === null) {
            return undefined;
        } else {
            let state: AppState = JSON.parse(localStorage.getItem("state") || "{}");
            if (isAppState(state)) {
                return state;
            } else {
                return undefined;
            }
        }
    }
}

export default StorageApi