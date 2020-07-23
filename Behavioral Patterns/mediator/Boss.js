"use strict";
exports.__esModule = true;
var Boss = /** @class */ (function () {
    function Boss() {
        this.coWorkers = new Array();
    }
    Boss.prototype.addMember = function (coWorker) {
        this.coWorkers.push(coWorker);
        coWorker.boss = this;
    };
    Boss.prototype.introduce = function (coWorker) {
        console.log("Boss:跟大家介紹這位是" + coWorker.name);
    };
    Boss.prototype.workHard = function () {
        this.coWorkers.forEach(function (v, i, arr) {
            console.log("Boss:" + v.name + "認真點做啊！");
        });
    };
    Boss.prototype.giveWork = function (coWorker) {
        console.log("Boss:" + coWorker.name + "這個幫忙一下。");
    };
    return Boss;
}());
exports.Boss = Boss;
