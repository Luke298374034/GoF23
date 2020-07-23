"use strict";
exports.__esModule = true;
var PM_1 = require("./PM");
var Programmer_1 = require("./Programmer");
var Boss_1 = require("./Boss");
var main = /** @class */ (function () {
    function main() {
    }
    main.prototype.main = function () {
        // 無名的Boss
        var boss = new Boss_1.Boss();
        // 各個員工
        var wei = new PM_1.PM("小偉");
        var bad = new Programmer_1.Programmer("小惡");
        var good = new Programmer_1.Programmer("阿仁");
        // 把員工加入Boss下面管理
        boss.addMember(wei);
        boss.addMember(bad);
        boss.addMember(good);
        // Boss介紹新來的小惡
        boss.introduce(bad);
        // 阿仁自己工作
        good.work();
        // boss請大家專心工作
        boss.workHard();
        // 小惡自己做不來
        // PM請老闆幫忙
        wei.bossHelp(bad);
    };
    return main;
}());
exports.main = main;
var doing = new main();
doing.main();
console.log("do main");
