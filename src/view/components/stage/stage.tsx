import { Box } from "@mui/material";
import { moveDancer, selectState } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import { findCurrentBlocking, getWindowDimensions } from "../../../model/util";
import StageDancer from "./stageDancer";

export default function Stage() {
    const appState = useAppSelector(selectState);
    const dispatch = useAppDispatch();
    let currentBlocking = findCurrentBlocking(appState);
    let dancers = (currentBlocking && currentBlocking.dancers) || []

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        let data: { id: number } = JSON.parse(e.dataTransfer.getData("data"));
        let newX = e.clientX;
        let newY = e.clientY;
        dispatch(moveDancer({ id: data.id, x: newX, y: newY }));
    }

    return (
        <Box onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} sx={{ width: "100%", height: "100%" }}>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
        </Box>
    )
}