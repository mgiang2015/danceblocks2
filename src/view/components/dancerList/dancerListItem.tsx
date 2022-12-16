import { Box } from "@mui/material";
import { Dancer } from "../../../model/dancer";

interface DancerListItemProp {
    dancer: Dancer
}

export default function DancerListItem({ dancer }: DancerListItemProp): JSX.Element {
    return (
        <Box>Hehe i am dancer with id {dancer.getId()}</Box>
    )
}