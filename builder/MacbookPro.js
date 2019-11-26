"use strict";
exports.__esModule = true;
var MacbookPro = /** @class */ (function () {
    function MacbookPro() {
    }
    MacbookPro.prototype.setProcessor = function (processor) {
        this.processor = processor;
    };
    MacbookPro.prototype.setMemory = function (memory) {
        this.memory = memory;
    };
    MacbookPro.prototype.setStorage = function (storage) {
        this.storage = storage;
    };
    MacbookPro.prototype.setGraphics = function (graphics) {
        this.graphics = graphics;
    };
    MacbookPro.prototype.setKeyboard = function (keyboard) {
        this.keyboard = keyboard;
    };
    MacbookPro.prototype.getProcessor = function () {
        return this.processor;
    };
    MacbookPro.prototype.getMemory = function () {
        return this.memory;
    };
    MacbookPro.prototype.getStorage = function () {
        return this.storage;
    };
    MacbookPro.prototype.getGraphics = function () {
        return this.graphics;
    };
    MacbookPro.prototype.getKeyboard = function () {
        return this.keyboard;
    };
    MacbookPro.prototype.toString = function () {
        return "{ Macbook : " + "\n" +
            "Processor : " + this.getProcessor().name + "\n" +
            "Memory size : " + this.getMemory().size + "GB" + "\n" +
            "Graphics : " + this.getGraphics().name + "\n" +
            "Storage size : " + this.getStorage().size + "GB" + "\n" +
            "Keyboard language : " + this.getKeyboard().language +
            " }";
    };
    return MacbookPro;
}());
exports.MacbookPro = MacbookPro;
var Processor = /** @class */ (function () {
    function Processor(name) {
        this.name = name;
    }
    return Processor;
}());
exports.Processor = Processor;
var Memory = /** @class */ (function () {
    function Memory(size) {
        this.size = size;
    }
    return Memory;
}());
exports.Memory = Memory;
var Graphics = /** @class */ (function () {
    function Graphics(name) {
        this.name = name;
    }
    return Graphics;
}());
exports.Graphics = Graphics;
var Storage = /** @class */ (function () {
    function Storage(size) {
        this.size = size;
    }
    return Storage;
}());
exports.Storage = Storage;
var Keyboard = /** @class */ (function () {
    function Keyboard(language) {
        this.language = language;
    }
    return Keyboard;
}());
exports.Keyboard = Keyboard;
