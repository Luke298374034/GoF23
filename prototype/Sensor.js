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
var Prototype_1 = require("./Prototype");
var Sensor = /** @class */ (function (_super) {
    __extends(Sensor, _super);
    function Sensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sensor.prototype.getData = function () {
        return this.data;
    };
    Sensor.prototype.setData = function (data) {
        this.data = data;
    };
    Sensor.prototype.getID = function () {
        return this.ID;
    };
    Sensor.prototype.setID = function (ID) {
        this.ID = ID;
    };
    Sensor.prototype.getName = function () {
        return name;
    };
    Sensor.prototype.setName = function (name) {
        this.name = name;
    };
    Sensor.prototype.getNickname = function () {
        return this.nickname;
    };
    Sensor.prototype.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    Sensor.prototype.getVersion = function () {
        return this.version;
    };
    Sensor.prototype.setVersion = function (version) {
        this.version = version;
    };
    Sensor.prototype.getWifiID = function () {
        return this.wifiID;
    };
    Sensor.prototype.setWifiID = function (wifiID) {
        this.wifiID = wifiID;
    };
    Sensor.prototype.getWifiPass = function () {
        return this.wifiPass;
    };
    Sensor.prototype.setWifiPass = function (wifiPass) {
        this.wifiPass = wifiPass;
    };
    Sensor.prototype.clone = function () {
        var _this = this;
        // return <Sensor>super.clone();
        // return Object.create(Sensor.prototype);
        var cloned = Object.create(Sensor.prototype || null);
        // var cloned = <Sensor>super.clone()
        Object.keys(this).map(function (key) {
            cloned[key] = _this[key];
        });
        return cloned;
    };
    return Sensor;
}(Prototype_1.Prototype));
exports.Sensor = Sensor;
