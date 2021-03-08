"use strict";
exports.__esModule = true;
var seatingArrangement_1 = require("./seatingArrangement");
var testData = [
    'Alice would gain 54 happiness units by sitting next to Bob.',
    'Alice would lose 79 happiness units by sitting next to Carol.',
    'Alice would lose 2 happiness units by sitting next to David.',
    'Bob would gain 83 happiness units by sitting next to Alice.',
    'Bob would lose 7 happiness units by sitting next to Carol.',
    'Bob would lose 63 happiness units by sitting next to David.',
    'Carol would lose 62 happiness units by sitting next to Alice.',
    'Carol would gain 60 happiness units by sitting next to Bob.',
    'Carol would gain 55 happiness units by sitting next to David.',
    'David would gain 46 happiness units by sitting next to Alice.',
    'David would lose 7 happiness units by sitting next to Bob.',
    'David would gain 41 happiness units by sitting next to Carol.',
];
describe('SeatingArrangement', function () {
    describe('getOptimalArrangementValue', function () {
        test('testData should return 330', function () {
            var seatingArrangement = new seatingArrangement_1.SeatingArrangement(testData);
            var actual = seatingArrangement.getOptimalArrangementValue();
            var expected = 330;
            expect(actual).toBe(expected);
        });
    });
});
