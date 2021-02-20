"use strict";
exports.__esModule = true;
var box_1 = require("./box");
describe('Box', function () {
    describe('getRequiredWrapping()', function () {
        test('2x3x4 should return 58', function () {
            // given
            var input = '2x3x4';
            var box = new box_1.Box(input);
            // then
            expect(box.getRequiredWrapping()).toBe(58);
        });
        test('1x1x10 should return 43', function () {
            // given
            var input = '1x1x10';
            var box = new box_1.Box(input);
            // then
            expect(box.getRequiredWrapping()).toBe(43);
        });
        test('20x3x11 should return 659', function () {
            //given
            var input = '20x3x11';
            var box = new box_1.Box(input);
            //then
            var expected = 2 * (20 * 3 + 20 * 11 + 3 * 11) + 3 * 11;
            expect(box.getRequiredWrapping()).toBe(expected);
        });
    });
    describe('getRequiredRibbon()', function () {
        test('2x3x4 should return 34', function () {
            //given
            var input = '2x3x4';
            var box = new box_1.Box(input);
            //then
            expect(box.getRequiredRibbon()).toBe(34);
        });
        test('1x1x10 should return 14', function () {
            //given
            var input = '1x1x10';
            var box = new box_1.Box(input);
            //then
            expect(box.getRequiredRibbon()).toBe(14);
        });
        test('20x3x11 should return 688', function () {
            //given
            var input = '20x3x11';
            var box = new box_1.Box(input);
            //then
            expect(box.getRequiredRibbon()).toBe(688);
        });
    });
});
