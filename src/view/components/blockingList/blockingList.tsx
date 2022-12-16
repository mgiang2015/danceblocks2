import { Project } from "../../../model/project";
import { ListSubheader, Stack, Typography } from "@mui/material";
import BlockingListItem from "./blockingListItem";

interface BlockingListProps {
    project: Project
}

export default function BlockingList({ project }: BlockingListProps) {
    const blockings = project.getBlockings();
    return (
        <Stack direction="row" spacing={2} sx={{ display: 'flex', alignItems: 'center', height: '100%', maxWidth: '85em', overflow: 'auto' }}>
            <ListSubheader sx={{ display: 'flex', justifyContent: 'center' }}>Blockings</ListSubheader>
            {
                blockings.map((blocking) => {
                    return <BlockingListItem key={blocking.getId()} isCurrent={project.getCurrentBlockingId() === blocking.getId()} blocking={blocking}></BlockingListItem>
                })
            }
        </Stack>
    )
}