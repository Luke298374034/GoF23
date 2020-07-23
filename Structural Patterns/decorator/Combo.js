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
var Item_1 = require("./Item");
var ConcreteDecorateItem_1 = require("./ConcreteDecorateItem");
var Combo = /** @class */ (function (_super) {
    __extends(Combo, _super);
    function Combo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Combo.prototype.orderCombo = function () {
        this.addItem();
    };
    Combo.prototype.addItem = function () {
        var item = new Item_1.Item();
        var item1 = new ConcreteDecorateItem_1.Drink(item);
        var item2 = new ConcreteDecorateItem_1.Soup(item1);
        var item3 = new ConcreteDecorateItem_1.Cake(item2);
        item.order();
        item1.order();
        item2.order();
        item3.order();
    };
    return Combo;
}(Item_1.Item));
exports.Combo = Combo;
