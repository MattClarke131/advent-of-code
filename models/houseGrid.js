"use strict";
exports.__esModule = true;
exports.HouseGrid = void 0;
var HouseGrid = /** @class */ (function () {
    function HouseGrid(inputString) {
        this.houses = {};
        this.visitAllHouses(inputString);
    }
    HouseGrid.prototype.getNumHousesWithAtLeastOnePresent = function () {
        return this.getAllHouses().length;
    };
    HouseGrid.prototype.getAllHouses = function () {
        return Object.values(this.houses)
            .reduce(function (memo, row) {
            return memo.concat(Object.values(row));
        }, []);
    };
    HouseGrid.prototype.visitAllHouses = function (instructions) {
        var x = 0;
        var y = 0;
        var i = 0;
        this.visitHouse(0, 0);
        while (i < instructions.length) {
            var instruction = instructions[i];
            switch (instruction) {
                case '<': {
                    x--;
                    break;
                }
                case '>': {
                    x++;
                    break;
                }
                case '^': {
                    y++;
                    break;
                }
                case 'v': {
                    y--;
                    break;
                }
            }
            this.visitHouse(x, y);
            i++;
        }
    };
    HouseGrid.prototype.visitHouse = function (x, y) {
        var _a;
        if (!this.houses[x]) {
            var house = new House(x, y);
            var row = (_a = {}, _a[y] = house, _a);
            this.houses[x] = row;
        }
        else if (!this.houses[x][y]) {
            var house = new House(x, y);
            this.houses[x][y] = house;
        }
        else {
            this.houses[x][y].visit();
        }
    };
    return HouseGrid;
}());
exports.HouseGrid = HouseGrid;
var House = /** @class */ (function () {
    function House(x, y) {
        this.x = x;
        this.y = y;
        this.presents = 1;
    }
    House.prototype.visit = function () {
        this.presents++;
    };
    House.prototype.getNumPresents = function () {
        return this.presents;
    };
    return House;
}());
