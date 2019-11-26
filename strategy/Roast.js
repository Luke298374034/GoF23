"use strict";
exports.__esModule = true;
var Roast = /** @class */ (function () {
    function Roast() {
    }
    Roast.prototype.cook = function (temperature, time) {
        console.log("\u706B\u70E4: \u6EAB\u5EA6", temperature, "\u6642\u9593", time);
    };
    Roast.prototype.getName = function () {
        return 'roasting';
    };
    return Roast;
}());
exports["default"] = Roast;
