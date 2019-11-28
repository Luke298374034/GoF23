"use strict";
exports.__esModule = true;
var RealImage_1 = require("./RealImage");
var ProxyImage = /** @class */ (function () {
    function ProxyImage(fileName) {
        this.fileName = fileName;
    }
    ProxyImage.prototype.display = function () {
        if (this.realImage == null) {
            this.realImage = new RealImage_1.RealImage(this.fileName);
        }
        this.realImage.display();
    };
    return ProxyImage;
}());
exports.ProxyImage = ProxyImage;
