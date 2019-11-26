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
var Drink_1 = require("./Drink");
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee(sugar, ice) {
        return _super.call(this, sugar, ice) || this;
    }
    Coffee.prototype.setCoffeeType = function (coffeeType) {
        this.coffeeType = coffeeType;
    };
    Coffee.prototype.getCoffeeType = function () {
        return this.coffeeType;
    };
    return Coffee;
}(Drink_1["default"]));
exports["default"] = Coffee;
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["LATTE"] = 0] = "LATTE";
    CoffeeType[CoffeeType["MOCHA"] = 1] = "MOCHA";
    CoffeeType[CoffeeType["WHITE"] = 2] = "WHITE";
    CoffeeType[CoffeeType["BLUE_MOUNTAIN"] = 3] = "BLUE_MOUNTAIN";
    CoffeeType[CoffeeType["AMERICANO"] = 4] = "AMERICANO";
    CoffeeType[CoffeeType["ESPRESSO"] = 5] = "ESPRESSO";
})(CoffeeType = exports.CoffeeType || (exports.CoffeeType = {}));
