import { Box, Typography } from "@mui/material";
import { Dancer } from "../../../model/dancer";

interface DancerProps {
    dancer: Dancer
}

export default function StageDancer({ dancer }: DancerProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>{dancer.getName()}</Typography>
            <Box sx={{ backgroundColor: dancer.getColor(), height: '1.5em', width: '1.5em', borderRadius: '50%' }}/>
        </Box>
    )
}