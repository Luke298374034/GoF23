"use strict";
exports.__esModule = true;
var MacbookPro_1 = require("./MacbookPro");
var MacBookSeller = /** @class */ (function () {
    function MacBookSeller(macbookProBuilder) {
        this.macbookProBuilder = macbookProBuilder;
    }
    MacBookSeller.prototype.lowSpec = function () {
        return this.macbookProBuilder
            .buildCPU(new MacbookPro_1.Processor("2.2GHz 6 核心第八代 Intel Core i7 處理器"))
            .buildMemory(new MacbookPro_1.Memory(16))
            .buildGraphics(new MacbookPro_1.Graphics("Radeon Pro 555X 配備 4GB GDDR5 記憶體"))
            .buildStorage(new MacbookPro_1.Storage(256))
            .buildKeyboard(new MacbookPro_1.Keyboard("中文注音"))
            .build();
    };
    MacBookSeller.prototype.highSpec = function () {
        return this.macbookProBuilder
            .buildCPU(new MacbookPro_1.Processor("2.6GHz 6 核心第八代 Intel Core i7 處理器"))
            .buildMemory(new MacbookPro_1.Memory(16))
            .buildGraphics(new MacbookPro_1.Graphics("Radeon Pro 560X 配備 4GB GDDR5 記憶體"))
            .buildStorage(new MacbookPro_1.Storage(512))
            .buildKeyboard(new MacbookPro_1.Keyboard("中文注音"))
            .build();
    };
    return MacBookSeller;
}());
exports.MacBookSeller = MacBookSeller;
