"use strict";
exports.__esModule = true;
exports.SnowCodeGenerator = void 0;
var SnowCodeGenerator = /** @class */ (function () {
    function SnowCodeGenerator(start, row, column) {
        this.start = start;
        this.row = row;
        this.column = column;
    }
    SnowCodeGenerator.prototype.getCode = function () {
        var iterations = this.getNumIterations();
        var result = this.start;
        while (iterations > 0) {
            result = this.iterate(result);
            iterations--;
        }
        return result;
    };
    SnowCodeGenerator.prototype.getNumIterations = function () {
        return (this.triangle(this.column + this.row - 1)
            - this.row);
    };
    SnowCodeGenerator.prototype.triangle = function (n) {
        return (n * (n + 1)) / 2;
    };
    SnowCodeGenerator.prototype.iterate = function (n) {
        return (n * 252533) % 33554393;
    };
    return SnowCodeGenerator;
}());
exports.SnowCodeGenerator = SnowCodeGenerator;
