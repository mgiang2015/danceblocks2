import { Stack } from "@mui/material";
import toolbarFunctionalities from "./toolbarFunctionalities";
import ToolbarItem from "./toolbarItem";

export default function Toolbar() {
    return (
    <Stack spacing={2}>
        {toolbarFunctionalities.map(({label, listener}) => {
            return <ToolbarItem key={label} label={label} listener={listener} />
        })}
    </Stack>
    )
}