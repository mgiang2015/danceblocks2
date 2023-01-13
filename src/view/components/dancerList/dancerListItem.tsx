import { useState } from "react";
import styles from './dancerList.module.css'
import { useAppDispatch } from "../../../control/hooks";
import { renameDancer, changeDancerColor, deleteDancer } from "../../../control/stateSlice";

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
        if (name !== "" && name !== dancer.name) {
            rename(name);   
        }
        hideEdit()
    }
    
    return (
        <div className={styles.container}>
            <div>
                <p onClick={() => setEdit(!edit)} className={styles.gridItem}>{dancer.name}</p>
            </div>
            <div>
                <div style={{ height: '1em', width: '1em', backgroundColor: dancer.color }}/>
            </div>
            {
                edit
                ? 
                <div>
                    <p className={styles.gridItem}>Name</p>
                </div>
                : null
            }
            {
                edit
                ? 
                <div>
                    <input type={"text"} value={name} onChange={onNameChange} />
                </div>
                : null
            }
            {
                edit
                ?
                <div>
                    <p className={styles.gridItem}>Color</p>
                </div>
                : null
            }
            {
                edit
                ?
                <div>
                    <input type={"color"} value={dancer.color} onChange={onColorChange} />
                </div>
                : null
            }
            {
                edit
                ?
                <div>
                    <button type="button" onClick={onSubmit}>Update</button>
                </div>
                : null
            }
            {
                edit
                ?
                <div>
                    <button type="button" onClick={removeDancer}>Delete</button>
                </div>
                : null
            }
        </div>
    )
}