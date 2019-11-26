import { Boss } from './Boss'

export abstract class CoWorker {
    name: String;
    boss: Boss;

    constructor(name: String){
        this.name = name;
    }

    public abstract work(): void;
}