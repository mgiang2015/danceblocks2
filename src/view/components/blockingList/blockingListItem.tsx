import { Box, Typography } from "@mui/material";
import { Blocking } from "../../../model/blocking";

interface BlockingListItemProps {
    blocking: Blocking,
    isCurrent: boolean
}

export default function BlockingListItem({ blocking, isCurrent }: BlockingListItemProps): JSX.Element {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', border: isCurrent ? 4 : 1, height: '75%'}}>
            <Typography>{blocking.getName()}</Typography>
        </Box>
    )
}