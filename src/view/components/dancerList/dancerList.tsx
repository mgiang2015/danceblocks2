import { Blocking } from "../../../model/blocking";
import { Stack, Typography } from "@mui/material";
import DancerListItem from "./dancerListItem";

interface DancerListProps {
    blocking?: Blocking
}

export default function DancerList({ blocking }: DancerListProps) {
    const dancers = blocking ? blocking.getDancers() : [];
    return (
        <Stack spacing={2}>
            <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center' }}>Dancers</Typography>
            {
                dancers.map((dancer) => {
                    return <DancerListItem key={dancer.getId()} dancer={dancer}></DancerListItem>
                })
            }
        </Stack>
    )
}