import BlockingUpdateForm from "./blockingUpdateForm";

interface BlockingListItemProps {
    blocking: Blocking,
    isCurrent: boolean
}

export default function BlockingListItem({ blocking, isCurrent }: BlockingListItemProps): JSX.Element {
    return (
        <div style={{ height: '75%', display: 'flex'}}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', border: `${isCurrent ? "4px" : "1px"} solid black`}}>
            <p>{blocking.name}</p>
        </div>
        <BlockingUpdateForm blocking={blocking} />
        </div>
    )
}