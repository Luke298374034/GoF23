import { Light } from './Light'
import { Door } from './Door'
import { Invoker } from './Invoker'
import * as cmd from './ConcreteCommand'

let invoker = new Invoker()
let light = new Light()
let door = new Door()
let turnOn = new cmd.TurnOnCommand(light)
let turnOff = new cmd.TurnOffCommand(light)
let openDoor = new cmd.OpenDoorCommand(door)
let closeDoor = new cmd.CloseDoorCommand(door)

invoker.addCmd(openDoor)
invoker.addCmd(turnOn)
invoker.addCmd(closeDoor)

invoker.doCmd()

// 命令模式(Command Pattern)有三個主要角色，
// Invoker、ICommand和Receiver，
// 是將對行爲進行封裝的典型模式，
// 將命令的命令接收(請求操作者)跟執行命令(實際操作者)之間切分開來。

// 幾乎所有的類別都可以套用命令模式，但是只有在需要某些特殊功能，
// 如記錄操作步驟、取消上次命令的時候，
// 比較適合用命令模式。
