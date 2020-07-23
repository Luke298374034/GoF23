"use strict";
exports.__esModule = true;
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.cmdList = [];
    }
    Invoker.prototype.addCmd = function (command) {
        this.cmdList.push(command);
    };
    Invoker.prototype.doCmd = function () {
        this.cmdList.forEach(function (cmd) { return cmd.execute(); });
    };
    return Invoker;
}());
exports.Invoker = Invoker;
