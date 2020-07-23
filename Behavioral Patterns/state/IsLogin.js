"use strict";
exports.__esModule = true;
var IsLogin = /** @class */ (function () {
    function IsLogin(p) {
        this.name = 'IsLogin';
        this.person = p;
    }
    IsLogin.prototype.chat = function () {
        console.log('Chating!!!!');
    };
    IsLogin.prototype.login = function () {
        console.log('You are already logged in!');
    };
    IsLogin.prototype.logout = function () {
        console.log('Logout....');
        this.person.setState(this.person.getisLogoutState());
    };
    return IsLogin;
}());
exports.IsLogin = IsLogin;
