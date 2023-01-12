import { selectCurrentBlocking, selectState } from "../../../control/stateSlice";
import { useAppSelector } from "../../../control/hooks";
import DancerListItem from "./dancerListItem";
import { useEffect, useState } from "react";
import styles from './dancerList.module.css'

export default function DancerList() {
    const [dancersCopy, setDancersCopy] = useState<Dancer[]>([])
    let currentBlocking = useAppSelector(selectCurrentBlocking);
    
    // dancers is immutable. We need to copy and then sort + display the copy, not the original
    useEffect(() => {
        let dancers = currentBlocking ? currentBlocking.dancers : []
        let copy = [...dancers];
        copy.sort((a, b) => a.name.localeCompare(b.name));
        setDancersCopy(copy);
    }, [currentBlocking])

    return (
        <div className={styles.listContainer}>
            <p>{"Dancers"}</p>
            {
                dancersCopy.map((dancer: Dancer) => {
                    return <DancerListItem key={dancer.id} dancer={dancer}></DancerListItem>
                })
            }
        </div>
    )
}