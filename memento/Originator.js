"use strict";
exports.__esModule = true;
var Memento_1 = require("./Memento");
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.saveStateToMemento = function () {
        return new Memento_1.Memento(this.state);
    };
    Originator.prototype.getStateFromMemento = function (memento) {
        this.state = memento.getState();
    };
    return Originator;
}());
exports.Originator = Originator;
