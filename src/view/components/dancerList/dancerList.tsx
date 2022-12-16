import { Blocking } from "../../../model/blocking";
import { List, ListSubheader, Stack, Typography } from "@mui/material";
import DancerListItem from "./dancerListItem";

interface DancerListProps {
    blocking?: Blocking
}

export default function DancerList({ blocking }: DancerListProps) {
    const dancers = blocking ? blocking.getDancers() : [];
    dancers.sort();
    return (
        <Stack sx={{ maxHeight: '35em', overflow: 'auto', width: '100%' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Dancers</ListSubheader>
            {
                dancers.map((dancer) => {
                    return <DancerListItem key={dancer.getId()} dancer={dancer}></DancerListItem>
                })
            }
        </Stack>
    )
}