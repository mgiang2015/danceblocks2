import { ListSubheader, Stack } from "@mui/material";
import { addBlocking, addDancer, selectState } from "../../../control/stateSlice";
import { useAppDispatch, useAppSelector } from "../../../control/hooks";
import ToolbarItem from "./toolbarItem";

interface ToolbarProps {
    tools?: Tool[]
}

export default function Toolbar({ tools }: ToolbarProps) {
    const dispatch = useAppDispatch();
    const appState = useAppSelector(selectState);

    let toolbarFunctionalities: Tool[] = [
        {
            label: "Add Blocking",
            listener: () => dispatch(addBlocking())
        },{
            label: "Add Dancer",
            listener: () => dispatch(addDancer())
        },{
            label: "Share / Export Project",
            listener: () => {
                // stringify first
                const jsonString = JSON.stringify(appState);

                // blobify to allow download
                const blob = new Blob([jsonString], { type: "application/json" });
                const href = URL.createObjectURL(blob);
                
                // create a hidden link and click it for the user
                const link = document.createElement('a');
                link.download = "danceblocksProject.json";
                link.href = href;

                // click the link
                link.click();

                // remove link
                link.remove();
            }
        }
    ];

    if (tools) {
        toolbarFunctionalities = [...toolbarFunctionalities, ...tools]
    }

    return (
    <div>
        <p>Tools</p>
        {toolbarFunctionalities.map(({label, listener}) => {
            return <ToolbarItem key={label} label={label} listener={listener} />
        })}
    </div>
    )
}