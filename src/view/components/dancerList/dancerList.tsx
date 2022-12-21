import { List, ListSubheader, Stack, Typography } from "@mui/material";
import DancerListItem from "./dancerListItem";

interface DancerListProps {
    blocking?: Blocking
}

export default function DancerList({ blocking }: DancerListProps) {
    const dancers = blocking ? blocking.dancers : [];
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