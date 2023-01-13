import { addBlocking, addDancer, selectState, setNewState, toggle3d } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import { useEffect, useState } from "react";
import styles from "./toolbar.module.css"

export default function Toolbar() {
    const dispatch = useAppDispatch();
    const appState = useAppSelector(selectState);
    const [uploadData, setUploadData] = useState(null);
    const [uploadError, setUploadError] = useState("");

    useEffect(() => {
        if (uploadData !== null) {
            let newState = uploadData as AppState;
            dispatch(setNewState({ newState: newState }));
        }
    }, [uploadData])

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

    return (
    <div className={styles.container}>
        <p>Tools</p>
        <button onClick={() => dispatch(addBlocking())}>{"Add Blocking"}</button>
        <button onClick={() => dispatch(addDancer())}>{"Add Dancer"}</button>
        <button onClick={() => dispatch(toggle3d())}>{appState.view3d ? "Exit 3D" : "View 3D"}</button>
        <button onClick={() => downloadProject()}>{"Share Project"}</button>
        <input type={"file"} id="upload" onChange={onFileUpload} hidden={true}/>
        <label htmlFor="upload">{"Upload Project File"}</label>
    </div>
    )
}