"use strict";
exports.__esModule = true;
var Tea_1 = require("./Tea");
var Coffee_1 = require("./Coffee");
var DrinkShop = /** @class */ (function () {
    function DrinkShop() {
    }
    DrinkShop.prototype.order = function (drink, sugarType, iceType) {
        drink = drink.toLowerCase();
        switch (drink) {
            case "coffee":
                return new Coffee_1["default"](sugarType, iceType);
            case "tea":
                return new Tea_1["default"](sugarType, iceType);
            default:
                return null;
        }
    };
    return DrinkShop;
}());
exports["default"] = DrinkShop;
