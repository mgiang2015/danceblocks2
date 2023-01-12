import { useState } from "react";
import { useAppDispatch } from "../../../control/hooks";
import { deleteBlocking, renameBlocking } from "../../../control/stateSlice";

interface BlockingUpdateFormProps {
    blocking: Blocking
    hideEdit: () => void
}

export default function BlockingUpdateForm({ blocking, hideEdit }: BlockingUpdateFormProps) {
    const [name, setName] = useState("");
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
        <form>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="name">Name</label>
                <input type={"text"} value={name} style={{ width: '50%' }} onChange={onNameChange} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <button type="button" onClick={onSubmit} style={{ width: '50%' }}>Update</button>
                <button type="button" onClick={removeBlocking} style={{ width: '50%' }}>Delete</button>
            </div>
        </form>
    )

}