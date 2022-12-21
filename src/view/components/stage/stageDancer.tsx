import { Box, Typography } from "@mui/material";

interface DancerProps {
    dancer: Dancer
}

export default function StageDancer({ dancer }: DancerProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{dancer.name}</Typography>
            <Box sx={{ backgroundColor: dancer.color, height: '1.5em', width: '1.5em', borderRadius: '50%' }}/>
        </Box>
    )
}