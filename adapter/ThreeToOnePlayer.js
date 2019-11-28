"use strict";
exports.__esModule = true;
var Adapter_1 = require("./Adapter");
var VGAPlayer_1 = require("./VGAPlayer");
var ThreeToOnePlayer = /** @class */ (function () {
    function ThreeToOnePlayer() {
    }
    ThreeToOnePlayer.prototype.play = function (type) {
        if (type == 'VGA') {
            this.adpater = new VGAPlayer_1.VGAPlayer();
            this.adpater.playVGA(type);
        }
        else if (type == 'HDMI' || type == 'DP') {
            this.adpater = new Adapter_1.Adpater(type);
            this.adpater.play(type);
        }
    };
    return ThreeToOnePlayer;
}());
exports.ThreeToOnePlayer = ThreeToOnePlayer;
