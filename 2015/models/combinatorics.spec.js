"use strict";
exports.__esModule = true;
var combinatorics_1 = require("./combinatorics");
describe('Combinatorics', function () {
    describe('iterateComboWithCallback(array, choose, callback)', function () {
        test('[1,2,3,4,5,6] choose 1 should callback 6 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 1, callback);
            var expectedCount = 6;
            expect(count).toBe(expectedCount);
        });
        test('[1,2,3,4,5,6] choose 2 should callback 15 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 2, callback);
            var expectedCount = 15;
            expect(count).toBe(expectedCount);
        });
        test('[1,2,3,4,5,6] choose 3 should callback 20 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 3, callback);
            var expectedCount = 20;
            expect(count).toBe(expectedCount);
        });
        test('[1,2,3,4,5,6] choose 4 should callback 15 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 4, callback);
            var expectedCount = 15;
            expect(count).toBe(expectedCount);
        });
        test('[1,2,3,4,5,6] choose 5 should callback 6 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 5, callback);
            var expectedCount = 6;
            expect(count).toBe(expectedCount);
        });
        test('[1,2,3,4,5,6] choose 6 should callback 6 times', function () {
            var testArray = [1, 2, 3, 4, 5, 6];
            var count = 0;
            var callback = function (combination) { return count++; };
            combinatorics_1.Combinatorics.iterateComboWithCallback(testArray, 6, callback);
            var expectedCount = 1;
            expect(count).toBe(expectedCount);
        });
    });
});
