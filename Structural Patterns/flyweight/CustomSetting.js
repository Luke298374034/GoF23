"use strict";
exports.__esModule = true;
//ExtrinsicState
var CustomSetting = /** @class */ (function () {
    function CustomSetting(set) {
        switch (set) {
            // 一些低階設定
            case "LOW":
                this.cpu = "i5";
                this.memory = 8;
                this.storage = 256;
                break;
            // 一些高階設定
            case "HIGH":
                this.cpu = "i7";
                this.memory = 16;
                this.storage = 512;
                break;
            default:
        }
    }
    CustomSetting.prototype.getCpu = function () {
        return this.cpu;
    };
    CustomSetting.prototype.setCpu = function (cpu) {
        this.cpu = cpu;
    };
    CustomSetting.prototype.getMemory = function () {
        return this.memory;
    };
    CustomSetting.prototype.setMemory = function (memory) {
        this.memory = memory;
    };
    CustomSetting.prototype.getStorage = function () {
        return this.storage;
    };
    CustomSetting.prototype.setStorage = function (storage) {
        this.storage = storage;
    };
    CustomSetting.prototype.toString = function () {
        return "CustomSetting = { "
            + "\n" + "cpu = " + this.getCpu()
            + "\n" + "memory = " + this.getMemory()
            + "\n" + "storage = " + this.getStorage()
            + "\n" + "}";
    };
    //儲存一些使用者設定的類別
    CustomSetting.LOW = new CustomSetting("LOW");
    CustomSetting.HIGH = new CustomSetting("HIGH");
    return CustomSetting;
}());
exports.CustomSetting = CustomSetting;
