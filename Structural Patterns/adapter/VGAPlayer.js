"use strict";
exports.__esModule = true;
var VGAPlayer = /** @class */ (function () {
    function VGAPlayer() {
    }
    VGAPlayer.prototype.playVGA = function (vgaSetting) {
        console.log('play', vgaSetting);
    };
    return VGAPlayer;
}());
exports.VGAPlayer = VGAPlayer;
// 舊的撥放器 只能Play VGA
