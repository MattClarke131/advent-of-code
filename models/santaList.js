"use strict";
exports.__esModule = true;
exports.SantaList = void 0;
var SantaList = /** @class */ (function () {
    function SantaList(listData) {
        this.getMemLength = function (s) {
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
    return SantaList;
}());
exports.SantaList = SantaList;
