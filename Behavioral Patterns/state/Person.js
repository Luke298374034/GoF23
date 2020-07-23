"use strict";
exports.__esModule = true;
var IsLogin_1 = require("./IsLogin");
var IsLogout_1 = require("./IsLogout");
var Person = /** @class */ (function () {
    function Person() {
        this.isLogin = new IsLogin_1.IsLogin(this);
        this.isLogout = new IsLogout_1.IsLogout(this);
        this.state = this.isLogout; //預設狀態是登出狀態
    }
    //====
    //各個方法執行時，會呼叫狀態的方法。 所以我不會有一串邏輯判斷，因為會透過切方法來找到對應的回應。
    Person.prototype.chat = function () {
        this.state.chat();
    };
    Person.prototype.login = function () {
        this.state.login();
    };
    Person.prototype.logout = function () {
        this.state.logout();
    };
    //===
    //取得登入狀態以及登出狀態。
    Person.prototype.getisLoginState = function () {
        return this.isLogin;
    };
    Person.prototype.getisLogoutState = function () {
        return this.isLogout;
    };
    //=====
    //取目前狀態
    Person.prototype.getState = function () {
        console.log(this.state.name);
    };
    //設定狀態
    Person.prototype.setState = function (s) {
        this.state = s;
    };
    return Person;
}());
exports.Person = Person;
