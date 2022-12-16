import { Box, Typography } from "@mui/material";
import { Dancer } from "../../../model/dancer";

interface DancerProps {
    dancer: Dancer
}

export default function StageDancer({ dancer }: DancerProps) {
    return (
        <Box>
            <Typography>I am dancer {dancer.getName()} color {dancer.getColor()}</Typography>
        </Box>
    )
}