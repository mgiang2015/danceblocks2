import { moveDancer, selectCurrentBlocking, selectGridGap, selectStageDepth, selectStageWidth, setDancerCoordAbsolute } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import StageDancer from "./stageDancer";
import styles from "./stage.module.css"
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Stage() {
    const dispatch = useAppDispatch();
    const stageDepth = useAppSelector(selectStageDepth);
    const stageWidth = useAppSelector(selectStageWidth);
    const gridGap = useAppSelector(selectGridGap);
    let currentBlocking = useAppSelector(selectCurrentBlocking);

    // Get stage reference, top and left
    const [stageTop, setStageTop] = useState(0);
    const [stageLeft, setStageLeft] = useState(0);
    const ref = useRef<any>();
    useEffect(() => {
        const { offsetLeft, offsetTop } = ref.current;
        setStageTop(offsetTop);
        setStageLeft(offsetLeft);
    }, [])

    let dancers = (currentBlocking && currentBlocking.dancers) || []

    const gridVertical = []
    const gridHorizontal = []
    for (let i = 0; i < stageWidth; i += gridGap) {
        gridVertical.push(i);
    }
    for (let i = 0; i < stageDepth; i += gridGap) {
        gridHorizontal.push(i);
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        let data: { id: number, x: number, y: number } = JSON.parse(e.dataTransfer.getData("data"));
        let newX = e.clientX - stageLeft;
        let newY = e.clientY - stageTop;
        if (gridGap > 0) {
            newX = newX - newX % gridGap
            newY = newY - newY % gridGap
        }
        
        dispatch(setDancerCoordAbsolute({ id: data.id, x: newX, y: newY}));
    }

    return (
        <div ref={ref} className={styles.stage} onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} style={{ position: "relative", width: stageWidth, height: stageDepth, border: "0.1em solid black" }}>
            {
                gridVertical.map(i => {
                    return <div style={{ height: stageDepth, width: 1, position: "absolute", top: 0, left: i, backgroundColor: "blue" }} />
                })
            }
            {
                gridHorizontal.map(i => {
                    return <div style={{ height: 1, width: stageWidth, position: "absolute", top: i, left: 0, backgroundColor: "blue" }} />
                })
            }
            <span className={styles.frontCenter}>{"|"}</span>
            <span className={styles.frontLeftQuarter}>{"|"}</span>
            <span className={styles.frontRightQuarter}>{"|"}</span>
            <span className={styles.backCenter}>{"|"}</span>
            <span className={styles.backLeftQuarter}>{"|"}</span>
            <span className={styles.backRightQuarter}>{"|"}</span>
            <span className={styles.rightCenter}>{"-"}</span>
            <span className={styles.rightUpperQuarter}>{"-"}</span>
            <span className={styles.rightLowerQuarter}>{"-"}</span>
            <span className={styles.leftCenter}>{"-"}</span>
            <span className={styles.leftUpperQuarter}>{"-"}</span>
            <span className={styles.leftLowerQuarter}>{"-"}</span>
            <span className={styles.centerCenter}>{"+"}</span>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
            
        </div>
    )
}