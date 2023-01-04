import React from "react";
import { useAppDispatch } from "../../../control/hooks";
import { changeCurrentBlocking } from "../../../control/stateSlice";
import BlockingUpdateForm from "./blockingUpdateForm";

interface BlockingListItemProps {
    blocking: Blocking
    isCurrent: boolean
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void
}

export default function BlockingListItem({ blocking, isCurrent, onDragStart, onDragEnter }: BlockingListItemProps): JSX.Element {
    const dispatch = useAppDispatch();
    const makeCurrentBlocking = () => {
        dispatch(changeCurrentBlocking({ id: blocking.id }))
    }

    return (
        <div style={{ height: '75%', display: 'flex'}}>
        <div draggable="true" onDragStart={onDragStart} onDragEnter={onDragEnter} onClick={makeCurrentBlocking} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', border: `${isCurrent ? "4px" : "1px"} solid black`}}>
            <p>{blocking.name}</p>
        </div>
        <BlockingUpdateForm blocking={blocking} />
        </div>
    )
}