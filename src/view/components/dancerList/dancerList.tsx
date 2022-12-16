import { Blocking } from "../../../model/blocking";
import { Stack } from "@mui/material";
import DancerListItem from "./dancerListItem";

interface DancerListProps {
    blocking?: Blocking
}

export default function DancerList({ blocking }: DancerListProps) {
    const dancers = blocking ? blocking.getDancers() : [];
    return (
        <Stack spacing={2}>
            {
                dancers.map((dancer) => {
                    return <DancerListItem key={dancer.getId()} dancer={dancer}></DancerListItem>
                })
            }
        </Stack>
    )
}