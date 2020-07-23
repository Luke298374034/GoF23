import { Student } from './Student'
import { Observerable } from './Observerable'

export class Podcast implements Observerable{
    private list = new Array();
    public name: string;

    constructor(name: string){
        this.name = name
    }

    add(student: Student): void{
        this.list.push(student)
    }

    remove(student: Student): void{
        let removeIndex = this.list.map((i) => { return i.name; }).indexOf(student.name);
        this.list.splice(removeIndex, 1)
    }

    getName(): String{
        return this.name
    }

    notifyObservers(): void{
        this.list.forEach(student => {
            student.update()
        })
    }
}