import { useAppDispatch } from "../../../control/hooks";
import { changeCurrentBlocking } from "../../../control/stateSlice";
import BlockingUpdateForm from "./blockingUpdateForm";

interface BlockingListItemProps {
    blocking: Blocking,
    isCurrent: boolean
}

export default function BlockingListItem({ blocking, isCurrent }: BlockingListItemProps): JSX.Element {
    const dispatch = useAppDispatch();
    const makeCurrentBlocking = () => {
        dispatch(changeCurrentBlocking({ id: blocking.id }))
    }

    return (
        <div style={{ height: '75%', display: 'flex'}}>
        <div onClick={makeCurrentBlocking} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', border: `${isCurrent ? "4px" : "1px"} solid black`}}>
            <p>{blocking.name}</p>
        </div>
        <BlockingUpdateForm blocking={blocking} />
        </div>
    )
}