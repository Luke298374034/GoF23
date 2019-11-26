"use strict";
exports.__esModule = true;
var ComboA_1 = require("./ComboA");
var ComboB_1 = require("./ComboB");
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.getComboA = function (ps) {
        return new ComboA_1.ComboA(ps);
    };
    Factory.prototype.getComboB = function (ps) {
        return new ComboB_1.ComboB(ps);
    };
    return Factory;
}());
exports.Factory = Factory;
