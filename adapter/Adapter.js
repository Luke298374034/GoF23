"use strict";
exports.__esModule = true;
var DPPlayer_1 = require("./DPPlayer");
var HDMIPlayer_1 = require("./HDMIPlayer");
var Adpater = /** @class */ (function () {
    function Adpater(type) {
        if (type == 'DP')
            this.player = new DPPlayer_1.DPPlayer();
        if (type == 'HDMI')
            this.player = new HDMIPlayer_1.HDMIPlayer();
    }
    Adpater.prototype.play = function (type) {
        //if... else ...
        this.player.play(type);
    };
    return Adpater;
}());
exports.Adpater = Adpater;
