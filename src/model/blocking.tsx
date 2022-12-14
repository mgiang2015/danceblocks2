import { Dancer } from "./dancer"

class Blocking {
    private static counter = 0;
    private id: number = 0;
    private dancers: (Dancer)[] = [];
    private name: string = "New Blocking"

    constructor(name: string) {
        this.name = name;
        this.id = Blocking.counter;
        Blocking.counter++;
    }

    static DefaultBlocking() {
        let newBlocking = new Blocking("New Blocking");
        newBlocking.addDancer(Dancer.DefaultDancer());
        return newBlocking;
    }

    public getName() {
        return this.name;
    }

    public getDancers() {
        return this.dancers;
    }

    public getId() {
        return this.id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public addDancer(dancer: Dancer) {
        this.dancers.push(dancer);
    }

    public addAllDancers(newDancers: Dancer[]) {
        for (let i = 0; i < newDancers.length; i++) {
            this.dancers.push(newDancers[i]);
        }
    }
}

export { Blocking }