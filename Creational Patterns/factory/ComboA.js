"use strict";
exports.__esModule = true;
var ComboA = /** @class */ (function () {
    function ComboA(ps) {
        this.ps = ps;
    }
    ComboA.prototype.include = function () {
        console.log("include burger and milktea", this.ps);
    };
    return ComboA;
}());
exports.ComboA = ComboA;
