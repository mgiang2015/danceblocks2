import styles from "./stage.module.css";

interface DancerProps {
    dancer: Dancer
}

export default function StageDancer({ dancer }: DancerProps) {
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        let data = {
            id: dancer.id,
            x: e.clientX,
            y: e.clientY
        }
        e.dataTransfer.setData("data", JSON.stringify(data));
    }

    return (
        <div className={styles.dancerContainer} draggable={true} onDragStart={(e) => onDragStart(e)} style={{ position: "absolute", width: "fit-content", transform: "translate(-50%,-50%)", top: dancer.yCoord, left: dancer.xCoord, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: "pointer", zIndex: 1 }}>
            <p style={{ margin: 0 }}>{`${dancer.name}`}</p>
            <div style={{ position: "relative", transform: `rotate(${dancer.angle || 0}deg)` }}>
                <div style={{ position: "relative", top: 0, left: 0 ,backgroundColor: dancer.color, height: '1.5em', width: '1.5em', borderRadius: '50%' }} />
                <div style={{ position: "relative", top: 0, left: 0, width: 0, height: 0, borderLeft: '0.75em solid transparent', borderRight: '0.75em solid transparent', borderTop: `0.75em solid ${dancer.color}` }} />
            </div>
        </div>
    )
}