"use strict";
exports.__esModule = true;
var lookAndSay_1 = require("./lookAndSay");
describe('LookAndSay', function () {
    describe('getNthDigit(n)', function () {
        var input = 1;
        test('one iteration returns 11', function () {
            var lookAndSay = new lookAndSay_1.LookAndSay(input);
            var result = lookAndSay.getNthNumber(1);
            expect(result).toBe('11');
        });
        test('two iteration returns 21', function () {
            var lookAndSay = new lookAndSay_1.LookAndSay(input);
            var result = lookAndSay.getNthNumber(2);
            expect(result).toBe('21');
        });
        test('three iteration returns 1211', function () {
            var lookAndSay = new lookAndSay_1.LookAndSay(input);
            var result = lookAndSay.getNthNumber(3);
            expect(result).toBe('1211');
        });
        test('four iteration returns 111221', function () {
            var lookAndSay = new lookAndSay_1.LookAndSay(input);
            var result = lookAndSay.getNthNumber(4);
            expect(result).toBe('111221');
        });
        test('five iteration returns 312211', function () {
            var lookAndSay = new lookAndSay_1.LookAndSay(input);
            var result = lookAndSay.getNthNumber(5);
            expect(result).toBe('312211');
        });
    });
});
