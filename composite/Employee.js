"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, dept, sal) {
        this.name = name;
        this.dept = dept;
        this.salary = sal;
        this.subordinates = new Array();
    }
    Employee.prototype.add = function (e) {
        this.subordinates.push(e);
    };
    Employee.prototype.remove = function (e) {
        var _this = this;
        this.subordinates.forEach(function (item, index) {
            if (item === e)
                _this.subordinates.splice(index, 1);
        });
    };
    Employee.prototype.getSubordinates = function () {
        return this.subordinates;
    };
    Employee.prototype.toString = function () {
        return ("Employee :[ Name : " + this.name + ", dept : " + this.dept + ", salary :" + this.salary + " ]");
    };
    return Employee;
}());
exports.Employee = Employee;
