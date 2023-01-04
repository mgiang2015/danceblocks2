import { ListSubheader, Stack, Typography } from "@mui/material";
import BlockingListItem from "./blockingListItem";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import { selectBlockings, selectCurrentBlocking, moveBlocking } from "../../../control/stateSlice";
import { useState } from "react";

export default function BlockingList() {
    const blockings = useAppSelector(selectBlockings);
    const dispatch = useAppDispatch();
    const currentBlocking = useAppSelector(selectCurrentBlocking);

    // drag and drop
    const [dragIndex, setDragIndex] = useState(-1);
    const [dropIndex, setDropIndex] = useState(-1);

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        // Edit blockings array order
        dispatch(moveBlocking({ oldIndex: dragIndex, targetIndex: dropIndex }));
        
        // reset
        setDragIndex(-1);
        setDropIndex(-1);
    }

    // pass down to list items
    const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDragIndex(index);
    }

    const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDropIndex(index)
        // can also do onDrop here to make it render immediately
    }

    return (
        <Stack onDrop={onDrop} onDragOver={onDragOver} direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', height: '100%', maxWidth: '85em', overflow: 'auto' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Blockings</ListSubheader>
            {
                blockings.map((blocking, index) => {
                    return <BlockingListItem onDragStart={(e) => onDragStart(e, index)} onDragEnter={(e) => onDragEnter(e, index)} key={blocking.id} isCurrent={currentBlocking ? currentBlocking.id === blocking.id : false} blocking={blocking}></BlockingListItem>
                })
            }
        </Stack>
    )
}