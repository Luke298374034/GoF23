"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Game_1 = require("./Game");
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cricket.prototype.initialize = function () {
        console.log('Cricket initializing..');
    };
    Cricket.prototype.startPlay = function () {
        console.log('Cricket startPlaying..');
    };
    Cricket.prototype.endPlay = function () {
        console.log('Cricket endPlaying..');
    };
    return Cricket;
}(Game_1.Game));
exports.Cricket = Cricket;
