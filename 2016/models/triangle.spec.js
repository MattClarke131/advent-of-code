"use strict";
exports.__esModule = true;
var triangle_1 = require("./triangle");
describe('triangle', function () {
    describe('static isLegal(instruction)', function () {
        test('5   10   25 is not legal', function () {
            var input = '  5    10  25';
            var expected = false;
            var actual = triangle_1["default"].isLegal(input);
            expect(actual).toBe(expected);
        });
    });
});
