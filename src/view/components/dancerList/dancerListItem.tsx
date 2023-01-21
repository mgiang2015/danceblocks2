import { useState } from "react";
import styles from './dancerList.module.css'
import { useAppDispatch } from "../../../control/hooks";
import { renameDancer, changeDancerColor, deleteDancer, changeDancerAngle } from "../../../control/stateSlice";

interface DancerListItemProp {
    dancer: Dancer
}

export default function DancerListItem({ dancer }: DancerListItemProp): JSX.Element {
    const [edit, setEdit] = useState(false);

    const hideEdit = () => {
        setEdit(false);
    }
    
    // Ported from dancerUpdateForm
    const dispatch = useAppDispatch();
    const [name, setName] = useState(dancer.name);

    const onNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const onColorChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value !== dancer.color) {
            changeColor(event.currentTarget.value);
        }
    }

    const onAngleChange = (event: React.FormEvent<HTMLInputElement>) => {
        changeAngle(parseFloat(event.currentTarget.value));
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
    
    const changeAngle = (newAngle: number) => {
        dispatch(changeDancerAngle({ id: dancer.id, angle: newAngle}))
    }

    const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        if (name !== "" && name !== dancer.name) {
            rename(name);   
        }
        hideEdit()
    }
    
    return (
        <div className={styles.parentContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <p onClick={() => setEdit(!edit)} className={styles.gridItem}>{dancer.name}</p>
                </div>
                <div>
                    <div style={{ height: '1em', width: '1em', backgroundColor: dancer.color }}/>
                </div>
            </div>
            {
                edit ?
                <div className={styles.formContainer}>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <input type={"text"} onChange={onNameChange} defaultValue={dancer.name} />
                    </div>
                    <div>
                        <p>Color</p>
                    </div>
                    <div>
                        <input type={"color"} defaultValue={dancer.color} onChange={onColorChange} />
                    </div>
                    <div>
                        <p>Angle</p>
                    </div>
                    <div>
                        <input type={"number"} defaultValue={dancer.angle || 0} onChange={onAngleChange} />
                    </div>
                    <div>
                        <button type="button" onClick={onSubmit}>Update</button>
                    </div>
                    <div>
                        <button type="button" onClick={removeDancer}>Delete</button>
                    </div>
                </div>
                : null
            }
            
        </div>
    )
}