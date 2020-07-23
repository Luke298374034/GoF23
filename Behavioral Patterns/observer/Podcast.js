"use strict";
exports.__esModule = true;
var Podcast = /** @class */ (function () {
    function Podcast(name) {
        this.list = new Array();
        this.name = name;
    }
    Podcast.prototype.add = function (student) {
        this.list.push(student);
    };
    Podcast.prototype.remove = function (student) {
        var removeIndex = this.list.map(function (i) { return i.name; }).indexOf(student.name);
        this.list.splice(removeIndex, 1);
    };
    Podcast.prototype.getName = function () {
        return this.name;
    };
    Podcast.prototype.notifyObservers = function () {
        this.list.forEach(function (student) {
            student.update();
        });
    };
    return Podcast;
}());
exports.Podcast = Podcast;
