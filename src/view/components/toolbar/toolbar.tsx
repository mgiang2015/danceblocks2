import { ListSubheader, Stack } from "@mui/material";
import { addBlocking, addDancer } from "../../../control/stateSlice";
import { useAppDispatch } from "../../../control/hooks";
import ToolbarItem from "./toolbarItem";

interface ToolbarProps {
    tools?: Tool[]
}

export default function Toolbar({ tools }: ToolbarProps) {
    const dispatch = useAppDispatch();

    let toolbarFunctionalities: Tool[] = [
        {
            label: "Add Blocking",
            listener: () => dispatch(addBlocking())
        },{
            label: "Add Dancer",
            listener: () => dispatch(addDancer())
        }
    ];

    if (tools) {
        toolbarFunctionalities = [...toolbarFunctionalities, ...tools]
    }

    return (
    <Stack sx={{ maxHeight: '35em', overflow: 'auto', width: '100%' }}>
        <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Tools</ListSubheader>
        {toolbarFunctionalities.map(({label, listener}) => {
            return <ToolbarItem key={label} label={label} listener={listener} />
        })}
    </Stack>
    )
}