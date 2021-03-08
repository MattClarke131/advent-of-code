"use strict";
exports.__esModule = true;
var auntSue_1 = require("./auntSue");
var ticker = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
};
describe('AuntSue', function () {
    describe('matchesAnalysis(ticker)', function () {
        test('auntSue1 does not match analysis', function () {
            var rawAuntSue1 = 'Sue 1: children: 1, cars: 2, vizslas: 7';
            var auntSue1 = new auntSue_1.AuntSue(rawAuntSue1);
            var actual = auntSue1.matchesAnalysis(ticker);
            expect(actual).toBe(false);
        });
        test('auntSue2 does match analysis', function () {
            var rawAuntSue2 = 'Sue 2: children: 3, cars: 2, vizslas: 0';
            var auntSue2 = new auntSue_1.AuntSue(rawAuntSue2);
            var actual = auntSue2.matchesAnalysis(ticker);
            expect(actual).toBe(true);
        });
    });
    describe('matchesAnalysis2(ticker)', function () {
        test('auntSue1 does not match analysis', function () {
            var rawAuntSue1 = 'Sue 1: children: 3, cats: 7, goldfish: 5';
            var auntSue1 = new auntSue_1.AuntSue(rawAuntSue1);
            var actual = auntSue1.matchesAnalysis2(ticker);
            expect(actual).toBe(false);
        });
        test('auntSue2 does match analysis', function () {
            var rawAuntSue2 = 'Sue 2: children: 3, cats: 8, goldfish: 4';
            var auntSue2 = new auntSue_1.AuntSue(rawAuntSue2);
            var actual = auntSue2.matchesAnalysis2(ticker);
            expect(actual).toBe(true);
        });
    });
});
