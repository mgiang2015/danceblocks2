class Dancer {
    private static counter = 0;
    private id: number = 0;
    private name: string = "New Dancer";
    private color: string = "#A020F0";
    private percentX: number = 0;
    private percentY: number = 0;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
        this.id = Dancer.counter;
        Dancer.counter++;
    }

    static DefaultDancer() {
        return new Dancer("New Dancer", "#A020F0");
    }

    public setName(newName: string) {
        this.name = newName;
    }

    public setColor(newColor: string) {
        this.name = newColor;
    }

    public setCoord(percentX: number, percentY: number) {
        this.percentX = percentX;
        this.percentY = percentY;
    }

    public getName() {
        return this.name;
    }

    public getColor() {
        return this.color;
    }
    
    public getId() {
        return this.id;
    }

    public getCoords() {
        return {
            percentX: this.percentX,
            percentY: this.percentY
        };
    }
}

export { Dancer }