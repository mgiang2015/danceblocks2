import { Project } from "../../../model/project";
import { Stack } from "@mui/material";
import BlockingListItem from "./blockingListItem";

interface BlockingListProps {
    project: Project
}

export default function BlockingList({ project }: BlockingListProps) {
    const blockings = project.getBlockings();
    return (
        <Stack direction="row" spacing={2}>
            {
                blockings.map((blocking) => {
                    return <BlockingListItem key={blocking.getId()} blocking={blocking}></BlockingListItem>
                })
            }
        </Stack>
    )
}