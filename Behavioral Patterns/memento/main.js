"use strict";
exports.__esModule = true;
var CareTaker_1 = require("./CareTaker");
var Originator_1 = require("./Originator");
var originator = new Originator_1.Originator();
var careTaker = new CareTaker_1.CareTaker();
originator.setState("State #1");
originator.setState("State #2");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #3");
careTaker.add(originator.saveStateToMemento());
originator.setState("State #4");
console.log("Current State: " + originator.getState());
originator.getStateFromMemento(careTaker.get(0));
console.log("First saved State: " + originator.getState());
// Memoto：     負責儲存需要儲存的狀態的類。
// Originator： 提供建立Memoto或是回復到某個Memoto的狀態的方法。
// CareTaker：  負責保存備忘錄(memoto)的類別。
