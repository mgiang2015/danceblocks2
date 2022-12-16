import { Box, Typography } from "@mui/material";
import { Dancer } from "../../../model/dancer";

interface DancerListItemProp {
    dancer: Dancer
}

export default function DancerListItem({ dancer }: DancerListItemProp): JSX.Element {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
            <Typography>{dancer.getName()}</Typography>
            <Box sx={{ height: '1em', width: '1em', backgroundColor: dancer.getColor() }}/>
        </Box>
    )
}