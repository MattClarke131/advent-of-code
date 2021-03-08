"use strict";
exports.__esModule = true;
var niceCheck_1 = require("./niceCheck");
describe('NiceCheck', function () {
    describe('isNice()', function () {
        test('ugknbfddgicrmopn returns true', function () {
            var input = 'ugknbfddgicrmopn';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(true);
        });
        test('aaa returns true', function () {
            var input = 'aaa';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(true);
        });
        test('aeii returns true', function () {
            var input = 'aeii';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(true);
        });
        test('jchzalrnumimnmhp returns false', function () {
            var input = 'jchzalrnumimnmhp';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(false);
        });
        test('haegwjzuvuyypxyu returns false', function () {
            var input = 'haegwjzuvuyypxyu';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(false);
        });
        test('dvszwmarrgswjxmb returns false', function () {
            var input = 'dvszwmarrgswjxmb';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(false);
        });
        test('sszojmmrrkwuftyv returns false', function () {
            var input = 'sszojmmrrkwuftyv';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(false);
        });
        test('aaexx returns true', function () {
            var input = 'aaexx';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNice()).toBe(true);
        });
    });
    describe('isNiceV2()', function () {
        test('qjhvhtzxzqqjkmpb returns true', function () {
            var input = 'qjhvhtzxzqqjkmpb';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNiceV2()).toBe(true);
        });
        test('xxyxx returns true', function () {
            var input = 'xxyxx';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNiceV2()).toBe(true);
        });
        test('uurcxstgmygtbstg returns false', function () {
            var input = 'uurcxstgmygtbstg';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNiceV2()).toBe(false);
        });
        test('ieodomkazucvgmuy returns false', function () {
            var input = 'ieodomkazucvgmuy';
            var niceCheck = new niceCheck_1.NiceCheck(input);
            expect(niceCheck.isNiceV2()).toBe(false);
        });
    });
});
