"use strict";
exports.__esModule = true;
var Drink_1 = require("./Drink");
var Tea_1 = require("./Tea");
var Coffee_1 = require("./Coffee");
var DrinkShop_1 = require("./DrinkShop");
var drinkShop = new DrinkShop_1["default"]();
//點一杯烏龍茶
var tea = (drinkShop.order("tea", Drink_1.SugarType.FREE, Drink_1.IceType.EASY));
tea.setTeaType(Tea_1.TeaType.OOLONG);
console.log(tea.getTeaType() + "-" + tea.getIce() + "-" + tea.getSugar());
//點一杯美式
var coffee = (drinkShop.order("coffee", Drink_1.SugarType.QUARTER, Drink_1.IceType.HOT));
coffee.setCoffeeType(Coffee_1.CoffeeType.AMERICANO);
console.log(coffee.getCoffeeType() + "-" + coffee.getIce() + "-" + coffee.getSugar());
// 用轉型去做 這樣設計是不好的!?
