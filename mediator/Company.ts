import { CoWorker } from './CoWorker'

export interface Company {
    addMember(coWorker: CoWorker): any;

    introduce(coWorker: CoWorker): any;

    workHard(): any;

    giveWork(coWorker: CoWorker): any;
}