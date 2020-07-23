"use strict";
exports.__esModule = true;
var CustomSetting_1 = require("./CustomSetting");
var MacbookFactory_1 = require("./MacbookFactory");
var Macbook_1 = require("./Macbook");
var main = /** @class */ (function () {
    function main() {
    }
    main.prototype.main = function () {
        var factory = new MacbookFactory_1.MacbookFactory();
        var goodbook = factory.getMacbook(Macbook_1.Spec.HIGH);
        console.log(goodbook.toString());
        var superSetting = new CustomSetting_1.CustomSetting();
        superSetting.setCpu("i9");
        superSetting.setMemory(32);
        superSetting.setStorage(1024);
        var superMacbook = factory.getCustomMacbook(superSetting);
        console.log(superMacbook.toString());
    };
    return main;
}());
exports.main = main;
var work = new main();
work.main();
