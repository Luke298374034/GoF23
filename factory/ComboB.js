"use strict";
exports.__esModule = true;
var ComboB = /** @class */ (function () {
    function ComboB(ps) {
        this.ps = ps;
    }
    ComboB.prototype.include = function () {
        console.log("include sandwich and blacktea", this.ps);
    };
    return ComboB;
}());
exports.ComboB = ComboB;
