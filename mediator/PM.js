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
var CoWorker_1 = require("./CoWorker");
var PM = /** @class */ (function (_super) {
    __extends(PM, _super);
    function PM(name) {
        return _super.call(this, name) || this;
    }
    PM.prototype.work = function () {
        console.log(this.name + "做PM工作");
    };
    PM.prototype.bossHelp = function (coWorker) {
        this.boss.giveWork(coWorker);
    };
    return PM;
}(CoWorker_1.CoWorker));
exports.PM = PM;
