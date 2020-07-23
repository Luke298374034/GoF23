"use strict";
exports.__esModule = true;
var IsLogout = /** @class */ (function () {
    function IsLogout(p) {
        this.name = 'IsLogout';
        this.person = p;
    }
    IsLogout.prototype.chat = function () {
        console.log('Please Login first!');
    };
    IsLogout.prototype.login = function () {
        console.log('Login....');
        this.person.setState(this.person.getisLoginState());
    };
    IsLogout.prototype.logout = function () {
        console.log('You already out!');
    };
    return IsLogout;
}());
exports.IsLogout = IsLogout;
