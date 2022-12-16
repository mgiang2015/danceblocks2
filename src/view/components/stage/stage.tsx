import { Box } from "@mui/material";
import { Blocking } from "../../../model/blocking";
import StageDancer from "./stageDancer";

interface StageProps {
    blocking?: Blocking
}

export default function Stage({ blocking }: StageProps) {
    const dancers = blocking ? blocking.getDancers() : [];
    return (
        <Box>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.getId()} dancer={dancer}/>
            })}
        </Box>
    )
}