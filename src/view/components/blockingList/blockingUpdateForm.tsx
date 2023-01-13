import { useState } from "react";
import { useAppDispatch } from "../../../control/hooks";
import { deleteBlocking, renameBlocking } from "../../../control/stateSlice";
import styles from "./blockingList.module.css";

interface BlockingUpdateFormProps {
    blocking: Blocking
    hideEdit: () => void
}

export default function BlockingUpdateForm({ blocking, hideEdit }: BlockingUpdateFormProps) {
    const [name, setName] = useState(blocking.name);
    const dispatch = useAppDispatch();
    
    // change name
    const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }
    const rename = (newName: string) => {
        dispatch(renameBlocking({ id: blocking.id, name: newName }));
    }
    // delete blocking
    const removeBlocking = () => {
        dispatch(deleteBlocking({ id: blocking.id }))
    }

    // submit
    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        if (name !== "") {
            rename(name);
            setName("");
        }
        hideEdit()
    }

    return (
        <form className={styles.updateForm}>
            <p>Name</p>
            <input type={"text"} value={name} onChange={onNameChange} />
            <button type="button" onClick={onSubmit}>Update</button>
            <button type="button" onClick={removeBlocking}>Delete</button>
        </form>
    )

}