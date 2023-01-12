import React, { useState } from "react";
import { useAppDispatch } from "../../../control/hooks";
import { changeCurrentBlocking } from "../../../control/stateSlice";
import BlockingUpdateForm from "./blockingUpdateForm";
import styles from './blockingList.module.css'

interface BlockingListItemProps {
    blocking: Blocking
    isCurrent: boolean
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void
}

export default function BlockingListItem({ blocking, isCurrent, onDragStart, onDragEnter }: BlockingListItemProps): JSX.Element {
    const [edit, setEdit] = useState(false);

    const dispatch = useAppDispatch();
    const makeCurrentBlocking = () => {
        dispatch(changeCurrentBlocking({ id: blocking.id }))
    }
    
    const showEdit = () => {
        setEdit(true);
    }

    const hideEdit = () => {
        setEdit(false);
    }

    return (
        <div className={styles.blockingListItemContainer}>
            <div className={isCurrent ? styles.blockingListItemNameCurrent : styles.blockingListItemName} draggable="true" onDragStart={onDragStart} onDragEnter={onDragEnter} onClick={makeCurrentBlocking} style={{ border: `${isCurrent ? "4px" : "1px"} solid black`}}>
                <p>{blocking.name}</p>
                <button onClick={showEdit}>{"Edit"}</button>
            </div>
            {
                edit ? <BlockingUpdateForm blocking={blocking} hideEdit={hideEdit} /> : null
            }
        </div>
    )
}