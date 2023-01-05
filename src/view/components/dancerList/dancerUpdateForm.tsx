import React, { useState } from "react";
import { useAppDispatch } from "../../../control/hooks";
import { renameDancer, changeDancerColor, deleteDancer } from "../../../control/stateSlice";

interface DancerUpdateFormProps {
    dancer: Dancer
}

export default function DancerUpdateForm({ dancer }: DancerUpdateFormProps) {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");

    const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const onColorChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value !== dancer.color) {
            changeColor(event.currentTarget.value);
        }        
    }

    const rename = (newName: string) => {
        dispatch(renameDancer({ id: dancer.id, name: newName }))
    }
    const changeColor = (newColor: string) => {
        dispatch(changeDancerColor({ id: dancer.id, color: newColor }))
    }
    const removeDancer = () => {
        dispatch(deleteDancer({ id: dancer.id }));
    }

    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        if (name !== "") {
            rename(name);
            setName("");
        }
    }

    return (
        <form>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="name">Name</label>
                <input type={"text"} value={name} style={{ width: '50%' }} onChange={onNameChange} />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label htmlFor="color">Color</label>
                <input type={"color"} value={dancer.color} style={{ width: '50%' }} onChange={onColorChange} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <button type="button" onClick={onSubmit} style={{ width: '50%' }}>Update</button>
                <button type="button" onClick={removeDancer} style={{ width: '50%' }}>Delete</button>
            </div>
        </form>
    )
}