"use strict";
exports.__esModule = true;
var houseGrid_1 = require("./houseGrid");
describe('HouseGrid', function () {
    describe('getNumHousesWithAtLeastOnePresent()', function () {
        test(' ">" should return 2', function () {
            var input = ">";
            var houseGrid = new houseGrid_1.HouseGrid(input);
            var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
            expect(2).toBe(actual);
        });
        test(' "^>v<" should return 4', function () {
            var input = "^>v<";
            var houseGrid = new houseGrid_1.HouseGrid(input);
            var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
            expect(4).toBe(actual);
        });
        test(' "^v^v^v^v^v" should return 2', function () {
            var input = ">";
            var houseGrid = new houseGrid_1.HouseGrid(input);
            var actual = houseGrid.getNumHousesWithAtLeastOnePresent();
            expect(2).toBe(actual);
        });
    });
});
