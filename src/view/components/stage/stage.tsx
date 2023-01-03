import { Box } from "@mui/material";
import { moveDancer, selectCurrentBlocking, selectState } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import { findCurrentBlocking, getWindowDimensions } from "../../../model/util";
import StageDancer from "./stageDancer";
import { UccStageDepth, UccStageWidth } from "../../../model/const";

export default function Stage() {
    const dispatch = useAppDispatch();
    let currentBlocking = useAppSelector(selectCurrentBlocking);
    let dancers = (currentBlocking && currentBlocking.dancers) || []

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        let data: { id: number, x: number, y: number } = JSON.parse(e.dataTransfer.getData("data"));
        let oldX = data.x;
        let oldY = data.y;
        let newX = e.clientX;
        let newY = e.clientY;
        dispatch(moveDancer({ id: data.id, x: newX - oldX, y: newY - oldY }));
    }

    return (
        <Box onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} sx={{ position: "relative", width: UccStageWidth, height: UccStageDepth, border: 2 }}>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
        </Box>
    )
}