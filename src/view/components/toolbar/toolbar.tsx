import { Stack, Typography } from "@mui/material";
import toolbarFunctionalities from "./toolbarFunctionalities";
import ToolbarItem from "./toolbarItem";

export default function Toolbar() {
    return (
    <Stack spacing={2}>
        <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center' }}>Tools</Typography>
        {toolbarFunctionalities.map(({label, listener}) => {
            return <ToolbarItem key={label} label={label} listener={listener} />
        })}
    </Stack>
    )
}