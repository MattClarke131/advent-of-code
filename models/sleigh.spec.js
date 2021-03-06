"use strict";
exports.__esModule = true;
var sleigh_1 = require("./sleigh");
describe('Sleigh', function () {
    describe('getSmallestGroup()', function () {
        test('Example should return 88', function () {
            var presents = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
            var sleigh = new sleigh_1.Sleigh(presents, 3);
            var expected = 88;
            var actual = sleigh.getSmallestGroup();
            expect(actual).toBe(expected);
        });
    });
});
