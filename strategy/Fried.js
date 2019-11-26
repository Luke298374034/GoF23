"use strict";
exports.__esModule = true;
var Fried = /** @class */ (function () {
    function Fried() {
    }
    Fried.prototype.cook = function (temperature, time) {
        console.log("\u6CB9\u70B8: \u6EAB\u5EA6", temperature, "\u6642\u9593", time);
    };
    Fried.prototype.getName = function () {
        return 'frying';
    };
    return Fried;
}());
exports["default"] = Fried;
