import { Box } from "@mui/material";
import { selectState } from "../../../control/stateSlice";
import { useAppSelector } from "../../../control/hooks";
import { findCurrentBlocking } from "../../../model/factory";
import StageDancer from "./stageDancer";

export default function Stage() {
    const appState = useAppSelector(selectState);
    let currentBlocking = findCurrentBlocking(appState);
    let dancers = (currentBlocking && currentBlocking.dancers) || []

    return (
        <Box>
            {dancers.map((dancer) => {
                return <StageDancer key={dancer.id} dancer={dancer}/>
            })}
        </Box>
    )
}