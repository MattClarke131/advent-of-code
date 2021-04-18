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
    Triangle.isNumberArrayLegal = function (numberArray) {
        var sides = numberArray.sort(function (a, b) { return (a - b); });
        return sides[0] + sides[1] > sides[2];
    };
    Triangle.getTriangleSides = function (rawInstruction) {
        return rawInstruction
            .split(' ')
            .map(function (el) { return el.trim(); })
            .filter(function (el) { return el !== ''; })
            .map(function (el) { return parseInt(el); });
    };
    Triangle.getNumOfLegalVerticalTriangles = function (instructions) {
        var _this = this;
        var parsedInstructions = instructions.map(function (instruction) { return _this.getTriangleSides(instruction); });
        var total = 0;
        for (var i = 0; i < parsedInstructions.length; i += 3) {
            if (this.isNumberArrayLegal([
                parsedInstructions[i][0],
                parsedInstructions[i + 1][0],
                parsedInstructions[i + 2][0],
            ])) {
                total++;
            }
            if (this.isNumberArrayLegal([
                parsedInstructions[i][1],
                parsedInstructions[i + 1][1],
                parsedInstructions[i + 2][1],
            ])) {
                total++;
            }
            if (this.isNumberArrayLegal([
                parsedInstructions[i][2],
                parsedInstructions[i + 1][2],
                parsedInstructions[i + 2][2],
            ])) {
                total++;
            }
        }
        return total;
    };
    return Triangle;
}());
exports["default"] = Triangle;
