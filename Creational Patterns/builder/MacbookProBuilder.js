"use strict";
exports.__esModule = true;
var MacbookPro_1 = require("./MacbookPro");
var MacbookProBuilder = /** @class */ (function () {
    function MacbookProBuilder() {
        this.macbookPro = new MacbookPro_1.MacbookPro();
    }
    MacbookProBuilder.prototype.build = function () {
        return this.macbookPro;
    };
    return MacbookProBuilder;
}());
exports.MacbookProBuilder = MacbookProBuilder;
