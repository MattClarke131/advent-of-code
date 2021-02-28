"use strict";
exports.__esModule = true;
var eggnogCalculator_1 = require("./eggnogCalculator");
describe('EggnogCalculator', function () {
    describe('getNumberOfPermutationsForAmount(liters)', function () {
        test('20,15,10,5,5 and 25 should return 4', function () {
            var containers = [20, 15, 10, 5, 5];
            var eggnogCalculator = new eggnogCalculator_1.EggnogCalculator(containers);
            var liters = 25;
            var actual = eggnogCalculator.getNumberOfPermutationsForAmount(liters);
            var expected = 4;
            expect(actual).toBe(expected);
        });
    });
});
