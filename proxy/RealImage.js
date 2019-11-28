"use strict";
exports.__esModule = true;
var RealImage = /** @class */ (function () {
    function RealImage(fileName) {
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }
    RealImage.prototype.display = function () {
        console.log("Displaying " + this.fileName);
    };
    RealImage.prototype.loadFromDisk = function (fileName) {
        console.log("Loading " + fileName);
    };
    return RealImage;
}());
exports.RealImage = RealImage;
