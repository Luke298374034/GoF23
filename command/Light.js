"use strict";
exports.__esModule = true;
var Light = /** @class */ (function () {
    function Light() {
    }
    //Receiver可以是任何的類
    Light.prototype.turnOn = function () {
        console.log("開燈");
    };
    Light.prototype.turnOff = function () {
        console.log("關燈");
    };
    return Light;
}());
exports.Light = Light;
