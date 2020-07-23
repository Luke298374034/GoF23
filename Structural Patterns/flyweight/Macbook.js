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
var Monitor_1 = require("./Monitor");
var Macbook = /** @class */ (function (_super) {
    __extends(Macbook, _super);
    function Macbook(customSetting) {
        var _this = _super.call(this) || this;
        _this.customSetting = customSetting;
        return _this;
    }
    Macbook.prototype.setCustomSetting = function (customSetting) {
        this.customSetting = customSetting;
    };
    Macbook.prototype.toString = function () {
        return "CustomSetting = { " + "\n" +
            "cpu = " + this.customSetting.getCpu() + "\n" +
            "memory = " + this.customSetting.getMemory() + "\n" +
            "storage = " + this.customSetting.getStorage() + "\n" +
            "monitor = " + this.getMonitor() + "\n" +
            "}";
    };
    return Macbook;
}(Monitor_1.Monitor));
exports.Macbook = Macbook;
var Spec;
(function (Spec) {
    Spec["LOW"] = "LOW";
    Spec["HIGH"] = "HIGH";
})(Spec || (Spec = {}));
exports.Spec = Spec;
