"use strict";
exports.__esModule = true;
var Adapter_1 = require("./Adapter");
var ThrToOnePlayer = /** @class */ (function () {
    function ThrToOnePlayer(type) {
        this.adpater = new Adapter_1.Adpater(type);
    }
    ThrToOnePlayer.prototype.play = function () {
        this.adpater.play();
    };
    return ThrToOnePlayer;
}());
exports.ThrToOnePlayer = ThrToOnePlayer;
