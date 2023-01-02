import { Box, Typography } from "@mui/material";

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
        <Box draggable={true} onDragStart={(e) => onDragStart(e)} sx={{ position: "absolute", top: dancer.yCoord, left: dancer.xCoord, transform: `translate(-50%, -75%)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{`${dancer.name} ${dancer.xCoord} ${dancer.yCoord}`}</Typography>
            <Box sx={{ backgroundColor: dancer.color, height: '1.5em', width: '1.5em', borderRadius: '50%' }}/>
        </Box>
    )
}