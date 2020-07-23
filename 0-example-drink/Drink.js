"use strict";
exports.__esModule = true;
var Drink = /** @class */ (function () {
    function Drink(sugar, ice) {
        this.sugar = sugar;
        this.ice = ice;
    }
    Drink.prototype.getSugar = function () {
        return this.sugar;
    };
    Drink.prototype.setSugar = function (sugar) {
        this.sugar = sugar;
    };
    Drink.prototype.getIce = function () {
        return this.ice;
    };
    Drink.prototype.setIce = function (ice) {
        this.ice = ice;
    };
    return Drink;
}());
exports["default"] = Drink;
var SugarType;
(function (SugarType) {
    SugarType[SugarType["REGULAR"] = 0] = "REGULAR";
    SugarType[SugarType["LESS"] = 1] = "LESS";
    SugarType[SugarType["HALF"] = 2] = "HALF";
    SugarType[SugarType["QUARTER"] = 3] = "QUARTER";
    SugarType[SugarType["FREE"] = 4] = "FREE";
})(SugarType = exports.SugarType || (exports.SugarType = {}));
var IceType;
(function (IceType) {
    IceType[IceType["REGULAR"] = 0] = "REGULAR";
    IceType[IceType["EASY"] = 1] = "EASY";
    IceType[IceType["FREE"] = 2] = "FREE";
    IceType[IceType["HOT"] = 3] = "HOT";
})(IceType = exports.IceType || (exports.IceType = {}));
