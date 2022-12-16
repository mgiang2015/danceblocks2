import { List, ListSubheader, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import toolbarFunctionalities from "./toolbarFunctionalities";
import ToolbarItem from "./toolbarItem";

export default function Toolbar() {
    return (
    <Stack sx={{ maxHeight: '35em', overflow: 'auto', width: '100%' }}>
        <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Tools</ListSubheader>
        {toolbarFunctionalities.map(({label, listener}) => {
            return <ToolbarItem key={label} label={label} listener={listener} />
        })}
    </Stack>
    )
}