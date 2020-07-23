"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var CEO = new Employee_1.Employee("John", "CEO", 30000);
var headSales = new Employee_1.Employee("Robert", "Head Sales", 20000);
var headMarketing = new Employee_1.Employee("Michel", "Head Marketing", 20000);
var clerk1 = new Employee_1.Employee("Laura", "Marketing", 10000);
var clerk2 = new Employee_1.Employee("Bob", "Marketing", 10000);
var salesExecutive1 = new Employee_1.Employee("Richard", "Sales", 10000);
var salesExecutive2 = new Employee_1.Employee("Rob", "Sales", 10000);
CEO.add(headSales);
CEO.add(headMarketing);
headSales.add(salesExecutive1);
headSales.add(salesExecutive2);
headMarketing.add(clerk1);
headMarketing.add(clerk2);
//print all employees of the organization
console.log(CEO.toString());
CEO.getSubordinates().forEach(function (headEmployee) {
    console.log(headEmployee.toString());
    headEmployee.getSubordinates().forEach(function (employee) {
        console.log(employee.toString());
    });
});
