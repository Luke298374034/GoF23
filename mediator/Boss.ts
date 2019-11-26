import { Company } from './Company'
import { CoWorker } from './CoWorker'

export class Boss implements Company{
    coWorkers: Array<CoWorker>;

    constructor(){
        this.coWorkers = new Array<CoWorker>();
    }

    public addMember(coWorker: CoWorker): void{
        this.coWorkers.push(coWorker);
        coWorker.boss = this;
    }

    public introduce(coWorker: CoWorker): void{
        console.log("Boss:跟大家介紹這位是" + coWorker.name);
    }

    public workHard(): void {
        this.coWorkers.forEach((v, i, arr) => {
            console.log("Boss:" + v.name + "認真點做啊！");
        })
    }

    public giveWork(coWorker: CoWorker): void {
        console.log("Boss:" + coWorker.name + "這個幫忙一下。");
    }
}