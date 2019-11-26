"use strict";
exports.__esModule = true;
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(light) {
        this.light = light;
    }
    TurnOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    return TurnOnCommand;
}());
exports.TurnOnCommand = TurnOnCommand;
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(light) {
        this.light = light;
    }
    TurnOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    return TurnOffCommand;
}());
exports.TurnOffCommand = TurnOffCommand;
var OpenDoorCommand = /** @class */ (function () {
    function OpenDoorCommand(door) {
        this.door = door;
    }
    OpenDoorCommand.prototype.execute = function () {
        this.door.openDoor();
    };
    return OpenDoorCommand;
}());
exports.OpenDoorCommand = OpenDoorCommand;
var CloseDoorCommand = /** @class */ (function () {
    function CloseDoorCommand(door) {
        this.door = door;
    }
    CloseDoorCommand.prototype.execute = function () {
        this.door.closeDoor();
    };
    return CloseDoorCommand;
}());
exports.CloseDoorCommand = CloseDoorCommand;
