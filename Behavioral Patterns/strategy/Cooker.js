"use strict";
exports.__esModule = true;
var cooker = /** @class */ (function () {
    function cooker() {
    }
    cooker.prototype.setCookWay = function (c) {
        this.c = c;
    };
    cooker.prototype.doCook = function (temperature, time) {
        this.c.cook(temperature, time);
    };
    cooker.prototype.getCookName = function () {
        console.log(this.c.getName());
    };
    return cooker;
}());
exports["default"] = cooker;
