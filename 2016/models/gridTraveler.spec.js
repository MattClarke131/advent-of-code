"use strict";
exports.__esModule = true;
var gridTraveler_1 = require("./gridTraveler");
describe('GridTraveler', function () {
    describe('getFinalDistance()', function () {
        test('case 1 should return 5', function () {
            var inputArray = ['R2', 'L3'];
            var gridTraveler = new gridTraveler_1["default"](inputArray);
            var actual = gridTraveler.getFinalDistance();
            var expected = 5;
            expect(actual).toBe(expected);
        });
        test('case 2 should return 2', function () {
            var inputArray = ['R2', 'R2', 'R2'];
            var gridTraveler = new gridTraveler_1["default"](inputArray);
            var actual = gridTraveler.getFinalDistance();
            var expected = 2;
            expect(actual).toBe(expected);
        });
        test('case 1 should return 5', function () {
            var inputArray = ['R5', 'L5', 'R5', 'R3'];
            var gridTraveler = new gridTraveler_1["default"](inputArray);
            var actual = gridTraveler.getFinalDistance();
            var expected = 12;
            expect(actual).toBe(expected);
        });
    });
    describe('getFirstDoubleLocationDistance()', function () {
        test('case 1 should return 4', function () {
            var inputArray = ['R8', 'R4', 'R4', 'R8'];
            var gridTraveler = new gridTraveler_1["default"](inputArray);
            var actual = gridTraveler.getFirstDoubleLocationDistance();
            var expected = 4;
            expect(actual).toBe(expected);
        });
    });
});
