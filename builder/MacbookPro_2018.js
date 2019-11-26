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
var MacbookProBuilder_1 = require("./MacbookProBuilder");
var MacbookPro_2018 = /** @class */ (function (_super) {
    __extends(MacbookPro_2018, _super);
    function MacbookPro_2018() {
        return _super.call(this) || this;
    }
    MacbookPro_2018.prototype.buildCPU = function (processor) {
        this.macbookPro.setProcessor(processor);
        return this;
    };
    MacbookPro_2018.prototype.buildMemory = function (size) {
        this.macbookPro.setMemory(size);
        return this;
    };
    MacbookPro_2018.prototype.buildGraphics = function (name) {
        this.macbookPro.setGraphics(name);
        return this;
    };
    MacbookPro_2018.prototype.buildStorage = function (size) {
        this.macbookPro.setStorage(size);
        return this;
    };
    MacbookPro_2018.prototype.buildKeyboard = function (language) {
        this.macbookPro.setKeyboard(language);
        return this;
    };
    MacbookPro_2018.prototype.build = function () {
        return _super.prototype.build.call(this);
    };
    return MacbookPro_2018;
}(MacbookProBuilder_1.MacbookProBuilder));
exports.MacbookPro_2018 = MacbookPro_2018;
