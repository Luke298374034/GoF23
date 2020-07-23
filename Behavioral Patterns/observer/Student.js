"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(name, podcast) {
        this.name = name;
        this.podcast = podcast;
        // 重要的雙向綁定
        this.podcast.add(this);
    }
    Student.prototype.update = function () {
        console.log(this.name + "\u807D\u4E86" + this.podcast.getName() + "\u5EE3\u64AD");
    };
    return Student;
}());
exports.Student = Student;
