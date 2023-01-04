import { Box, Typography } from "@mui/material";
import DancerUpdateForm from "./dancerUpdateForm";

interface DancerListItemProp {
    dancer: Dancer
}

export default function DancerListItem({ dancer }: DancerListItemProp): JSX.Element {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                <Typography>{dancer.name}</Typography>
                <Box sx={{ height: '1em', width: '1em', backgroundColor: dancer.color }}/>
            </Box>
            <DancerUpdateForm dancer={dancer}/>
        </Box>
    )
}