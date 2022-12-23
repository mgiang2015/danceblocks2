import { List, ListSubheader, Stack, Typography } from "@mui/material";
import { selectState } from "../../../control/stateSlice";
import { useAppSelector } from "../../../control/hooks";
import { findCurrentBlocking } from "../../../model/util";
import DancerListItem from "./dancerListItem";
import { useEffect, useState } from "react";

export default function DancerList() {
    const [dancersCopy, setDancersCopy] = useState<Dancer[]>([])

    const appState = useAppSelector(selectState);
    let currentBlocking = findCurrentBlocking(appState);
    let dancers = currentBlocking ? currentBlocking.dancers : []
    
    // dancers is immutable. We need to copy and then sort + display the copy, not the original
    useEffect(() => {
        let copy = [...dancers];
        copy.sort((a, b) => a.name.localeCompare(b.name));
        setDancersCopy(copy);
    }, [dancers])

    return (
        <Stack sx={{ maxHeight: '35em', overflow: 'auto', width: '100%' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Dancers</ListSubheader>
            {
                dancersCopy.map((dancer: Dancer) => {
                    return <DancerListItem key={dancer.id} dancer={dancer}></DancerListItem>
                })
            }
        </Stack>
    )
}