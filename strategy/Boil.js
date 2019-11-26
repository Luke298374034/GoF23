"use strict";
exports.__esModule = true;
var Boil = /** @class */ (function () {
    function Boil() {
    }
    Boil.prototype.cook = function (temperature, time) {
        console.log("\u6C34\u716E: \u6EAB\u5EA6", temperature, "\u6642\u9593", time);
    };
    Boil.prototype.getName = function () {
        return 'boiling';
    };
    return Boil;
}());
exports["default"] = Boil;
