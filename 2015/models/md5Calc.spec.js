"use strict";
exports.__esModule = true;
var md5Calc_1 = require("./md5Calc");
describe('md5Calc', function () {
    describe('getLowestHashWithNZeroes(n)', function () {
        test.skip('abcdef should return 609043 for 5 zeroes', function () {
            var secretKey = 'abcdef';
            var md5Calc = new md5Calc_1.Md5Calc(secretKey);
            expect(md5Calc.getLowestHashWithNZeroes(5)).toBe(609043);
        });
    });
    describe('getLowestHashWithNZeroes(n)', function () {
        test.skip('pqrstuv should return 1048970 for 5 zeroes', function () {
            var secretKey = 'pqrstuv';
            var md5Calc = new md5Calc_1.Md5Calc(secretKey);
            expect(md5Calc.getLowestHashWithNZeroes(5)).toBe(1048970);
        });
    });
});
