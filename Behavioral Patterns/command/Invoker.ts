import { Command } from './Command'

export class Invoker {
    cmdList: Command[] = []

    addCmd(command: Command){
        this.cmdList.push(command)
    }

    doCmd(){
        this.cmdList.forEach((cmd) => cmd.execute())
    }
}