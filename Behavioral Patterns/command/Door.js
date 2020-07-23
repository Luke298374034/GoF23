"use strict";
exports.__esModule = true;
var Door = /** @class */ (function () {
    function Door() {
    }
    //Receiver可以是任何的類
    Door.prototype.openDoor = function () {
        console.log("開門");
    };
    Door.prototype.closeDoor = function () {
        console.log("關門");
    };
    return Door;
}());
exports.Door = Door;
