"use strict";
exports.__esModule = true;
exports.House = void 0;
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.firstHouseToReach = function (input) {
        var houseNumber = 1;
        while (true) {
            var factors = this.getFactors(houseNumber);
            var numberOfPresents = 10 * factors.reduce(function (memo, presents) { return memo + presents; });
            if (numberOfPresents >= input) {
                return houseNumber;
            }
            houseNumber++;
        }
    };
    House.prototype.getFactors = function (houseNumber) {
        var factors = [];
        for (var i = 1; i <= Math.sqrt(houseNumber); i++) {
            if (i === Math.sqrt(houseNumber)) {
                factors.push(i);
                return factors;
            }
            else if (houseNumber % i === 0) {
                factors.push(i);
                factors.push(houseNumber / i);
            }
        }
        return factors;
    };
    House.prototype.firstHouseToReachWithReasonableElves = function (input) {
        var houseNumber = 1;
        while (true) {
            var factors = this.getReasonableFactors(houseNumber);
            var numberOfPresents = 11 * factors.reduce(function (memo, presents) { return memo + presents; });
            if (numberOfPresents >= input) {
                return houseNumber;
            }
            houseNumber++;
        }
    };
    House.prototype.getReasonableFactors = function (houseNumber) {
        var factors = [];
        for (var i = 1; i <= 50; i++) {
            if (houseNumber % i === 0) {
                factors.push(houseNumber / i);
            }
        }
        return factors;
    };
    return House;
}());
exports.House = House;
