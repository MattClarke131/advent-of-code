"use strict";
exports.__esModule = true;
var keypadCalculator_1 = require("./keypadCalculator");
describe('KeypadCalculator', function () {
    describe('getCode()', function () {
        test('case 1 returns 1985', function () {
            var instructions = [
                'ULL',
                'RRDDD',
                'LURDL',
                'UUUUD',
            ];
            var keypadCalculator = new keypadCalculator_1["default"](instructions);
            var expected = '1985';
            var actual = keypadCalculator.getBathroomCode();
            expect(actual).toBe(expected);
        });
    });
    describe('getComplexCode()', function () {
        test('case 1 returns 5DB3', function () {
            var instructions = [
                'ULL',
                'RRDDD',
                'LURDL',
                'UUUUD',
            ];
            var keypadCalculator = new keypadCalculator_1["default"](instructions);
            var expected = '5DB3';
            var actual = keypadCalculator.getComplexCode();
            expect(actual).toBe(expected);
        });
    });
});
