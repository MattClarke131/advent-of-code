"use strict";
exports.__esModule = true;
var snowCodeGenerator_1 = require("./snowCodeGenerator");
var start = 20151125;
describe('SnowCodeGenerator', function () {
    describe('getCode()', function () {
        test('1,1', function () {
            var row = 1;
            var column = 1;
            var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(start, row, column);
            expect(snowCodeGenerator.getCode()).toBe(20151125);
        });
        test('2,1', function () {
            var row = 2;
            var column = 1;
            var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(start, row, column);
            expect(snowCodeGenerator.getCode()).toBe(31916031);
        });
        test('3,1', function () {
            var row = 3;
            var column = 1;
            var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(start, row, column);
            expect(snowCodeGenerator.getCode()).toBe(16080970);
        });
        test('1,2', function () {
            var row = 1;
            var column = 2;
            var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(start, row, column);
            expect(snowCodeGenerator.getCode()).toBe(18749137);
        });
        test('3,3', function () {
            var row = 3;
            var column = 3;
            var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(start, row, column);
            expect(snowCodeGenerator.getCode()).toBe(1601130);
        });
    });
});
