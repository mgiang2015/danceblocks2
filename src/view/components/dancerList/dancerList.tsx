import { List, ListSubheader, Stack, Typography } from "@mui/material";
import { selectState } from "../../../control/blockingsSlice";
import { useAppSelector } from "../../../control/hooks";
import { findCurrentBlocking } from "../../../model/factory";
import DancerListItem from "./dancerListItem";

export default function DancerList() {
    const appState = useAppSelector(selectState);
    let currentBlocking = findCurrentBlocking(appState);
    let dancers = (currentBlocking && currentBlocking.dancers) || []
    dancers.sort();
    return (
        <Stack sx={{ maxHeight: '35em', overflow: 'auto', width: '100%' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Dancers</ListSubheader>
            {
                dancers.map((dancer: Dancer) => {
                    return <DancerListItem key={dancer.id} dancer={dancer}></DancerListItem>
                })
            }
        </Stack>
    )
}