"use strict";
// export class Prototype {
//     constructor() {
//     }
exports.__esModule = true;
//     public saySomething():void{ //沒意義的方法呵呵
//         console.log('hello!');
//     }
//     public clone():Prototype{ //關鍵clone方法
//         let cloned = Object.create(Prototype.prototype || null);
//         //Prototype為所有Object都有的方法，詳細Javascript如何存還有原型鏈的概念，都可以去參考文章看看哦!
//         return cloned;
//     }
// }
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        return Object.create(Prototype.prototype || null);
    };
    return Prototype;
}());
exports.Prototype = Prototype;
