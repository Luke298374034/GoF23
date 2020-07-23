"use strict";
exports.__esModule = true;
// import java.util.HashMap;
var CustomSetting_1 = require("./CustomSetting");
var Macbook_1 = require("./Macbook");
var MacbookFactory = /** @class */ (function () {
    function MacbookFactory() {
        this.cache = new Map();
    }
    MacbookFactory.prototype.getMacbook = function (spec) {
        var c = new CustomSetting_1.CustomSetting(String(spec));
        if (this.cache.get(c)) {
            return this.cache.get(c);
        }
        var macbook = new Macbook_1.Macbook(c);
        this.cache.set(c, macbook);
        return macbook;
    };
    MacbookFactory.prototype.getCustomMacbook = function (key) {
        if (this.cache.get(key)) {
            return this.cache.get(key);
        }
        var macbook = new Macbook_1.Macbook(key);
        this.cache.set(key, macbook);
        return macbook;
    };
    return MacbookFactory;
}());
exports.MacbookFactory = MacbookFactory;
