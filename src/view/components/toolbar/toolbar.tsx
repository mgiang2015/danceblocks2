import { addBlocking, addDancer, decrementGridGap, disableGrid, enableGrid, incrementGridGap, selectState, setNewState, toggle3d, updateStageDepth, updateStageWidth } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import { useEffect, useState } from "react";
import styles from "./toolbar.module.css"
import { GridGapIncrement, MaxStageDepth, MaxStageWidth, scalingConstant } from "../../../control/const";

export default function Toolbar() {
    const dispatch = useAppDispatch();
    const appState = useAppSelector(selectState);
    const [uploadData, setUploadData] = useState(null);
    const [uploadError, setUploadError] = useState("");
    const [editDimension, setEditDimension] = useState(false);
    const [inputStageDepth, setInputStageDepth] = useState(`${appState.stageDepth * scalingConstant}`);
    const [inputStageWidth, setInputStageWidth] = useState(`${appState.stageWidth * scalingConstant}`);

    useEffect(() => {
        if (uploadData !== null) {
            let newState = uploadData as AppState;
            dispatch(setNewState({ newState: newState }));
        }
    }, [dispatch, uploadData])

    const downloadProject = () => {
        // stringify first
        const jsonString = JSON.stringify(appState);

        // blobify to allow download
        const blob = new Blob([jsonString], { type: "application/json" });
        const href = URL.createObjectURL(blob);
        
        // create a hidden link and click it for the user
        const link = document.createElement('a');
        link.download = "danceblocksProject.json";
        link.href = href;

        // click the link
        link.click();

        // remove link
        link.remove();
    }

    const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadFile = event.currentTarget.files ? event.currentTarget.files[0] : null;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            try {
                if (fileReader.result !== null) {
                        console.log(fileReader.result as string);
                        setUploadData(JSON.parse(fileReader.result as string))
                        setUploadError("");
                        console.log(JSON.parse(fileReader.result as string) as AppState)
                }
            } catch (err) {
                if (typeof err === "string") {
                    setUploadError(err)
                } else if (err instanceof Error) {
                    setUploadError(err.message) // works, `err` narrowed to Error
                } else {
                    setUploadError("** Error uploading file **");
                }

                console.log(uploadError);
            }
        }

        if (uploadFile !== null) {
            fileReader.readAsText(uploadFile)
        }
    }

    const onUpdateDimension = () => {
        let newDepth = parseFloat(inputStageDepth) / scalingConstant;
        let newWidth = parseFloat(inputStageWidth) / scalingConstant;

        // we want to keep depth : width ratio the same
        // Eg width is 4, depth is 3. I downscale depth to 1.5. newWidth = newDepth / oldDepth * oldWidth =  1.5 / 3 * 4 = 2
        if (newDepth > MaxStageDepth) {
            let originalNewDepth = newDepth;
            newDepth = MaxStageDepth;
            newWidth = newDepth / originalNewDepth * newWidth;
        }

        if (newWidth > MaxStageWidth) {
            let originalNewWidth = newWidth;
            newWidth = MaxStageWidth;
            newDepth = newWidth / originalNewWidth * newDepth;
        }

        // dispatch
        dispatch(updateStageDepth({ depth: newDepth }));
        dispatch(updateStageWidth({ width: newWidth }));

        setEditDimension(false);
    }

    const onReset = () => {
        dispatch(updateStageDepth({ depth: MaxStageDepth }));
        dispatch(updateStageWidth({ width: MaxStageWidth }));       
        setEditDimension(false);
    }

    const onIncrementGridGap = () => {
        dispatch(incrementGridGap({ inc: GridGapIncrement }))
    }

    const onDecrementGridGap = () => {
        dispatch(decrementGridGap({ dec: GridGapIncrement }))
    }

    const onEnableGrid = () => {
        dispatch(enableGrid())
    }

    const onDisableGrid = () => {
        dispatch(disableGrid())
    }

    return (
    <div className={styles.container}>
        <p>Tools</p>
        <button onClick={() => setEditDimension(!editDimension)}>{"Change stage dimensions"}</button>
        {
            editDimension ?
            <form className={styles.dimensionForm}>
                <p>{"Stage depth (m)"}</p>
                <input type={"number"} value={inputStageDepth} onChange={(e) => setInputStageDepth(e.currentTarget.value)} />
                <p>{"Stage width (m)"}</p>
                <input type={"number"} value={inputStageWidth} onChange={(e) => setInputStageWidth(e.currentTarget.value)} />
                <button onClick={onUpdateDimension}>{"Update"}</button>
                <button onClick={onReset}>{"Reset"}</button>
            </form>
            : null
        }
        <button onClick={() => dispatch(addBlocking())}>{"Add Fomration"}</button>
        <button onClick={() => dispatch(addDancer())}>{"Add Dancer"}</button>
        <button onClick={() => dispatch(toggle3d())}>{appState.view3d ? "Exit 3D" : "View 3D"}</button>
        <button onClick={() => downloadProject()}>{"Share Project"}</button>
        <button onClick={() => onIncrementGridGap()}>{"Increment Grid Gap"}</button>
        <button onClick={() => onDecrementGridGap()}>{"Decrement Grid Gap"}</button>
        <button onClick={() => onEnableGrid()}>{"Enable Grid"}</button>
        <button onClick={() => onDisableGrid()}>{"Disable Grid"}</button>

        <input type={"file"} id="upload" onChange={onFileUpload} hidden={true}/>
        <label htmlFor="upload">{"Upload Project File"}</label>
        <button><a href={"https://github.com/mgiang2015/danceblocks2/"} target="#">User Guide</a></button>
        <button><a href={"https://forms.gle/5FxpjidoBSaHATVS9"} target="#">Feedback</a></button>
    </div>
    )
}