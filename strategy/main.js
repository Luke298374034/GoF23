"use strict";
exports.__esModule = true;
var Cooker_1 = require("./Cooker");
var Fried_1 = require("./Fried");
var Roast_1 = require("./Roast");
var Boil_1 = require("./Boil");
var c = new Cooker_1["default"]();
c.setCookWay(new Fried_1["default"]());
c.doCook("250", "6");
c.getCookName();
c.setCookWay(new Roast_1["default"]());
c.doCook("400", "3");
c.getCookName();
c.setCookWay(new Boil_1["default"]());
c.doCook("100", "8");
c.getCookName();
// strategy pattern
// 先選擇(實作)策略，再傳入策略的參數
