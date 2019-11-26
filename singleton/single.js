var Single = /** @class */ (function () {
    function Single() {
    }
    Single.getInstance = function () {
        return this.single || new Single();
    };
    Single.prototype.getInfo = function () {
        return 'i am unique';
    };
    return Single;
}());
var s = Single.getInstance();
console.log(s.getInfo());
