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
var DecorateItem_1 = require("./DecorateItem");
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drink.prototype.order = function () {
        _super.prototype.order.call(this);
        console.log("\u52A0\u98F2\u659940\u5143");
    };
    return Drink;
}(DecorateItem_1.DecorateItem));
exports.Drink = Drink;
var Soup = /** @class */ (function (_super) {
    __extends(Soup, _super);
    function Soup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soup.prototype.order = function () {
        _super.prototype.order.call(this);
        console.log("\u52A0\u6E6F80\u5143");
    };
    return Soup;
}(DecorateItem_1.DecorateItem));
exports.Soup = Soup;
var Cake = /** @class */ (function (_super) {
    __extends(Cake, _super);
    function Cake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cake.prototype.order = function () {
        _super.prototype.order.call(this);
        console.log("\u52A0\u86CB\u7CD5100\u5143");
    };
    return Cake;
}(DecorateItem_1.DecorateItem));
exports.Cake = Cake;
