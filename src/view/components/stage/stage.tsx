import { Box } from "@mui/material";
import StageDancer from "./stageDancer";

interface StageProps {
    blocking?: Blocking
}

export default function Stage({ blocking }: StageProps) {
    const dancers = blocking ? blocking.dancers : [];
    return (
        <Box>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
        </Box>
    )
}