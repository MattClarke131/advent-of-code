"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.getNumOfLegalTriangles = function (instructions) {
        var _this = this;
        return instructions.reduce(function (memo, instruction) { return memo + (_this.isLegal(instruction) ? 1 : 0); }, 0);
    };
    Triangle.isLegal = function (rawInstruction) {
        var sides = this.getTriangleSides(rawInstruction)
            .sort(function (a, b) { return (a - b); });
        return sides[0] + sides[1] > sides[2];
    };
    Triangle.getTriangleSides = function (rawInstruction) {
        return rawInstruction
            .split(' ')
            .map(function (el) { return el.trim(); })
            .filter(function (el) { return el !== ''; })
            .map(function (el) { return parseInt(el); });
    };
    return Triangle;
}());
exports["default"] = Triangle;
