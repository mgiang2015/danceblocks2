import { Box, Typography } from "@mui/material";

interface BlockingListItemProps {
    blocking: Blocking,
    isCurrent: boolean
}

export default function BlockingListItem({ blocking, isCurrent }: BlockingListItemProps): JSX.Element {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', border: isCurrent ? 4 : 1, height: '75%', aspectRatio: 1 }}>
            <Typography>{blocking.name}</Typography>
        </Box>
    )
}