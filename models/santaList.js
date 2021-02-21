"use strict";
exports.__esModule = true;
exports.SantaList = void 0;
var SantaList = /** @class */ (function () {
    function SantaList(listData) {
        this.list = listData;
    }
    SantaList.prototype.getDiff = function () {
        return this.getNumCodeChars() - this.getNumMemChars();
    };
    SantaList.prototype.getNumCodeChars = function () {
        return this.list.reduce(function (m, e) { return m + e.length; }, 0);
    };
    SantaList.prototype.getNumMemChars = function () {
        var _this = this;
        return this.list.map(function (s) { return _this.getMemLength(s); }).reduce(function (m, e) { return m + e; });
    };
    SantaList.prototype.getMemLength = function (s) {
        var i = 0;
        var total = 0;
        while (i < s.length - 1) {
            if (s[i] === '\\') {
                if (s[i + 1] === '\\') {
                    total++;
                    i++;
                }
                else if (s[i + 1] === '"') {
                    total++;
                    i++;
                }
                else if (s[i + 1] === 'x') {
                    total += 3;
                    i += 3;
                }
            }
            i++;
        }
        return s.length - total - 2;
    };
    SantaList.prototype.getNewDiff = function () {
        return this.getNumNewChars() - this.getNumCodeChars();
    };
    SantaList.prototype.getNumNewChars = function () {
        var _this = this;
        return this.list.map(function (s) { return _this.getNewLength(s); }).reduce(function (m, e) { return m + e; });
    };
    SantaList.prototype.getNewLength = function (s) {
        var specialChars = ['"', '\\'];
        var newChars = s.split('')
            .reduce(function (memo, character) {
            return memo + (specialChars.includes(character) ? 1 : 0);
        }, 0);
        // Add two for starting and ending double quote: "
        return newChars + s.length + 2;
    };
    return SantaList;
}());
exports.SantaList = SantaList;
