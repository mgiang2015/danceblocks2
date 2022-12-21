import { ListSubheader, Stack, Typography } from "@mui/material";
import BlockingListItem from "./blockingListItem";
import { useAppSelector } from "../../../control/hooks";
import { selectState } from "../../../control/blockingsSlice";
import { findCurrentBlocking } from "../../../model/factory";

export default function BlockingList() {
    const appState = useAppSelector(selectState);
    let currentBlocking = findCurrentBlocking(appState);
    console.log(appState)
    return (
        <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', height: '100%', maxWidth: '85em', overflow: 'auto' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Blockings</ListSubheader>
            {
                appState.blockings.map((blocking) => {
                    return <BlockingListItem key={blocking.id} isCurrent={currentBlocking ? currentBlocking.id === blocking.id : false} blocking={blocking}></BlockingListItem>
                })
            }
        </Stack>
    )
}