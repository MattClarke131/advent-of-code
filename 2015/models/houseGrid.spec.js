"use strict";
exports.__esModule = true;
var houseGrid_1 = require("./houseGrid");
describe('HouseGrid', function () {
    describe('getNumHousesWithAtLeastOnePresent()', function () {
        describe('without RoboSanta', function () {
            test(' ">" should return 2', function () {
                var input = ">";
                var houseGrid = new houseGrid_1.HouseGrid(input);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(2);
            });
            test(' "^>v<" should return 4', function () {
                var input = "^>v<";
                var houseGrid = new houseGrid_1.HouseGrid(input);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(4);
            });
            test(' "^v^v^v^v^v" should return 2', function () {
                var input = "^v^v^v^v^v";
                var houseGrid = new houseGrid_1.HouseGrid(input);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(2);
            });
        });
        describe('with RoboSanta', function () {
            test(' "^V" should return 3', function () {
                var input = "^v";
                var houseGrid = new houseGrid_1.HouseGrid(input, true);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(3);
            });
            test(' "^>v<" should return 3', function () {
                var input = "^>v<";
                var houseGrid = new houseGrid_1.HouseGrid(input, true);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(3);
            });
            test(' "^v^v^v^v^v" should return 11', function () {
                var input = "^v^v^v^v^v";
                var houseGrid = new houseGrid_1.HouseGrid(input, true);
                var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
                expect(actual).toBe(11);
            });
        });
    });
});
