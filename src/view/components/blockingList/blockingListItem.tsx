import { Box } from "@mui/material";
import { Blocking } from "../../../model/blocking";

interface BlockingListItemProps {
    blocking: Blocking
}

export default function BlockingListItem({ blocking }: BlockingListItemProps): JSX.Element {
    return (
        <Box>Hehe i am blocking with id {blocking.getId()}</Box>
    )
}