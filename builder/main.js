"use strict";
exports.__esModule = true;
var MacbookPro_1 = require("./MacbookPro");
var MacbookPro_2018_1 = require("./MacbookPro_2018");
var MacbookSeller_1 = require("./MacbookSeller");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.test = function () {
        var macbookPro_2018 = new MacbookPro_2018_1.MacbookPro_2018();
        var macBookSeller = new MacbookSeller_1.MacBookSeller(macbookPro_2018);
        //經銷商的固定規格
        var myMacbook = macBookSeller.lowSpec();
        console.log(myMacbook.toString());
        //想要夢想中的macbook pro需要自己訂製
        var dreamMacbook = macbookPro_2018
            .buildCPU(new MacbookPro_1.Processor("2.9GHz 6 核心第八代 Intel Core i9 處理器"))
            .buildMemory(new MacbookPro_1.Memory(32))
            .buildStorage(new MacbookPro_1.Storage(4096))
            .buildKeyboard(new MacbookPro_1.Keyboard("英文"))
            .buildGraphics(new MacbookPro_1.Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
            .build();
        console.log(dreamMacbook.toString());
    };
    return Test;
}());
exports.Test = Test;
var t = new Test();
t.test();
