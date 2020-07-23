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
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea(sugar, ice) {
        return _super.call(this, sugar, ice) || this;
    }
    Tea.prototype.setTeaType = function (teaType) {
        this.teaType = teaType;
    };
    Tea.prototype.getTeaType = function () {
        return this.teaType;
    };
    return Tea;
}(Drink_1["default"]));
exports["default"] = Tea;
var TeaType;
(function (TeaType) {
    TeaType[TeaType["LEMON"] = 0] = "LEMON";
    TeaType[TeaType["OOLONG"] = 1] = "OOLONG";
    TeaType[TeaType["GINGER"] = 2] = "GINGER";
    TeaType[TeaType["HONEY"] = 3] = "HONEY";
})(TeaType = exports.TeaType || (exports.TeaType = {}));
