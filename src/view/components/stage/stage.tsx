import { moveDancer, selectCurrentBlocking, selectStageDepth, selectStageWidth, selectState } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import StageDancer from "./stageDancer";

export default function Stage() {
    const dispatch = useAppDispatch();
    const stageDepth = useAppSelector(selectStageDepth);
    const stageWidth = useAppSelector(selectStageWidth);
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
        <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} style={{ position: "relative", width: stageWidth, height: stageDepth, border: "0.1em solid black" }}>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
        </div>
    )
}