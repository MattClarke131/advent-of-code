"use strict";
exports.__esModule = true;
exports.Md5Calc = void 0;
var md5 = require("md5");
var Md5Calc = /** @class */ (function () {
    function Md5Calc(secretKey) {
        this.secretKey = secretKey;
    }
    Md5Calc.prototype.getLowestHashWithNZeroes = function (n) {
        var i = 0;
        while (true) {
            var hash = this.getHash(i);
            if (this.hashStartsWithNZeroes(hash, n)) {
                return i;
            }
            i++;
        }
    };
    Md5Calc.prototype.getHash = function (input) {
        return md5(this.secretKey + input);
    };
    Md5Calc.prototype.hashStartsWithNZeroes = function (hash, n) {
        return hash.slice(0, n) === '0'.repeat(n);
    };
    return Md5Calc;
}());
exports.Md5Calc = Md5Calc;
