"use strict";
exports.__esModule = true;
var Sub = require("./Sub");
var Facade = /** @class */ (function () {
    function Facade() {
        this.one = new Sub.SubClassOne();
        this.two = new Sub.SubClassTwo();
        this.three = new Sub.SubClassThree();
        this.four = new Sub.SubClassFour();
    }
    Facade.prototype.MethodA = function () {
        this.four.MethodFour();
        this.one.MethodOne();
    };
    Facade.prototype.MethodB = function () {
        this.two.MethodTwo();
        this.three.MethodThree();
    };
    return Facade;
}());
exports.Facade = Facade;
