import { CoWorker } from './CoWorker'

export class PM extends CoWorker {
    constructor(name: String) {
        super(name);
    }

    public work(): void {
        console.log(this.name + "做PM工作");
    }

    public bossHelp(coWorker: CoWorker): void{
        this.boss.giveWork(coWorker);
    }
}