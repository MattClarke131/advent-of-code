"use strict";
exports.__esModule = true;
var house_1 = require("./house");
describe('House', function () {
    describe('firstHouseToReach(number)', function () {
        test('10 is 1', function () {
            var house = new house_1.House();
            var input = 10;
            var actual = house.firstHouseToReach(input);
            var expected = 1;
            expect(actual).toBe(expected);
        });
        test('11 is 2', function () {
            var house = new house_1.House();
            var input = 11;
            var actual = house.firstHouseToReach(input);
            var expected = 2;
            expect(actual).toBe(expected);
        });
        test('30 is 2', function () {
            var house = new house_1.House();
            var input = 30;
            var actual = house.firstHouseToReach(input);
            var expected = 2;
            expect(actual).toBe(expected);
        });
        test('60 is 4', function () {
            var house = new house_1.House();
            var input = 60;
            var actual = house.firstHouseToReach(input);
            var expected = 4;
            expect(actual).toBe(expected);
        });
        test('150 is 8', function () {
            var house = new house_1.House();
            var input = 150;
            var actual = house.firstHouseToReach(input);
            var expected = 8;
            expect(actual).toBe(expected);
        });
    });
    describe('firstHouseToReachWithReasonableElvesWithReasonableElves(number)', function () {
        test('10 is 1', function () {
            var house = new house_1.House();
            var input = 10;
            var actual = house.firstHouseToReachWithReasonableElves(input);
            var expected = 1;
            expect(actual).toBe(expected);
        });
        test('12 is 2', function () {
            var house = new house_1.House();
            var input = 12;
            var actual = house.firstHouseToReachWithReasonableElves(input);
            var expected = 2;
            expect(actual).toBe(expected);
        });
        test('30 is 2', function () {
            var house = new house_1.House();
            var input = 30;
            var actual = house.firstHouseToReachWithReasonableElves(input);
            var expected = 2;
            expect(actual).toBe(expected);
        });
        test('60 is 4', function () {
            var house = new house_1.House();
            var input = 60;
            var actual = house.firstHouseToReachWithReasonableElves(input);
            var expected = 4;
            expect(actual).toBe(expected);
        });
        test('150 is 8', function () {
            var house = new house_1.House();
            var input = 150;
            var actual = house.firstHouseToReachWithReasonableElves(input);
            var expected = 8;
            expect(actual).toBe(expected);
        });
    });
});
