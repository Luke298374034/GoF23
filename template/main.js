"use strict";
exports.__esModule = true;
var Football_1 = require("./Football");
var Cricket_1 = require("./Cricket");
var football = new Football_1.Football();
var cricket = new Cricket_1.Cricket();
football.play();
cricket.play();
// 其實覺得這個pattern跟抽象類別的概念根本是一樣的
