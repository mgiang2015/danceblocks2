import { Blocking } from "./blocking"

class Project {
    private blockings: (Blocking)[] = [];
    private name: string = "New Project";
    private currentBlockingId = 0;

    constructor(name: string) {
        this.name = name;
    }

    static DefaultProject() {
        let newProject = new Project("New Project");
        newProject.addBlocking(Blocking.DefaultBlocking());
        return newProject;
    }

    public getName() {
        return this.name;
    }

    public getBlockings() {
        return this.blockings;
    }

    public getCurrentBlocking() {
        return this.blockings.find(blocking => blocking.getId() === this.currentBlockingId);
    }
 
    public setName(name: string) {
        this.name = name;
    }

    public setCurrentBlocking(id: number) {
        this.currentBlockingId = id;
    }

    public addBlocking(blocking: Blocking) {
        this.blockings.push(blocking);
    }

    public addAllBlockings(newBlockings: Blocking[]) {
        for (let i = 0; i < newBlockings.length; i++) {
            this.blockings.push(newBlockings[i]);
        }
    }
}

export { Project }