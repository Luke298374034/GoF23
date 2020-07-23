import { Light } from './Light'
import { Door } from './Door'
import { Command } from './Command'

export class TurnOnCommand implements Command {
    private light: Light

    constructor(light: Light){
        this.light = light
    }

    execute(): void{
        this.light.turnOn()
    }
}

export class TurnOffCommand implements Command {
    private light: Light

    constructor(light: Light){
        this.light = light
    }

    execute(): void{
        this.light.turnOff()
    }
}

export class OpenDoorCommand implements Command {
    private door: Door

    constructor(door: Door){
        this.door = door
    }

    execute(): void{
        this.door.openDoor()
    }
}

export class CloseDoorCommand implements Command {
    private door: Door

    constructor(door: Door){
        this.door = door
    }

    execute(): void{
        this.door.closeDoor()
    }
}