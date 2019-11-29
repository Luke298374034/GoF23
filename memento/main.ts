import {CareTaker} from './CareTaker';
import {Originator} from './Originator';

let originator:Originator = new Originator();
let careTaker:CareTaker = new CareTaker();

originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());

originator.setState("State #4");
console.log("Current State: " + originator.getState());

originator.getStateFromMemento(careTaker.get(0));
console.log("First saved State: " + originator.getState());

// Memoto：     儲存資料的單位。
// Originator： 提供建立Memoto或是回復到某個Memoto的狀態的方法。
// CareTaker：  負責保存備忘錄(memoto)的類別。