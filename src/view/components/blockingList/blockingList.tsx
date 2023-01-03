import { ListSubheader, Stack, Typography } from "@mui/material";
import BlockingListItem from "./blockingListItem";
import { useAppSelector } from "../../../control/hooks";
import { selectBlockings, selectCurrentBlocking, selectState } from "../../../control/stateSlice";
import { findCurrentBlocking } from "../../../model/util";

export default function BlockingList() {
    const blockings = useAppSelector(selectBlockings);
    let currentBlocking = useAppSelector(selectCurrentBlocking);
    return (
        <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', height: '100%', maxWidth: '85em', overflow: 'auto' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Blockings</ListSubheader>
            {
                blockings.map((blocking) => {
                    return <BlockingListItem key={blocking.id} isCurrent={currentBlocking ? currentBlocking.id === blocking.id : false} blocking={blocking}></BlockingListItem>
                })
            }
        </Stack>
    )
}