import { CoWorker } from './CoWorker'

export class Programmer extends CoWorker {
    constructor(name: String) {
        super(name);
    }

    public work(): void {
        console.log(this.name + "寫程式");
    }
}