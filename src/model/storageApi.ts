import { RootState } from "../control/store";

class StorageApi {    
    public static storeState(state: RootState) {
        localStorage.setItem("state", JSON.stringify(state));
    }

    public static getState() {
        if (localStorage.getItem("state") === null) {
            return {};
        }

        return JSON.parse(localStorage.getItem("state") || "");
    }
}

export default StorageApi