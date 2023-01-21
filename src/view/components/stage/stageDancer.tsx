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

    // TODO: transform: `rotate(${dancer.angle}deg)`
    return (
        <div className={styles.dancerContainer} draggable={true} onDragStart={(e) => onDragStart(e)} style={{ position: "absolute", top: dancer.yCoord, left: dancer.xCoord, transform: `translate(-50%, -75%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: "pointer" }}>
            <p style={{ margin: 0 }}>{`${dancer.name}`}</p>
            <div style={{ position: "relative", height: '2.25em', width: '1.5em', transform: 'rotate(0deg)' }}>
                <div style={{ position: "absolute", top: 0, left: 0 ,backgroundColor: dancer.color, height: '1.5em', width: '1.5em', borderRadius: '50%' }} />
                <div style={{ position: "absolute", top: '1.5em', left: 0, width: 0, height: 0, borderLeft: '0.75em solid transparent', borderRight: '0.75em solid transparent', borderTop: `0.75em solid ${dancer.color}` }} />
            </div>
        </div>
    )
}