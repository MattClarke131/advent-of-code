"use strict";
exports.__esModule = true;
exports.EggnogCalculator = void 0;
var EggnogCalculator = /** @class */ (function () {
    function EggnogCalculator(containers) {
        this.containers = containers.sort(function (a, b) { return b - a; });
    }
    EggnogCalculator.prototype.getNumberOfPermutationsForAmount = function (liters) {
        var count = 0;
        for (var i = 0; i < Math.pow(2, this.containers.length); i++) {
            var currentPermutation = i.toString(2)
                .padStart(this.containers.length, '0')
                .split('')
                .map(function (s) { return parseInt(s); });
            if (this.dotProduct(this.containers, currentPermutation) === liters) {
                count++;
            }
        }
        return count;
    };
    EggnogCalculator.prototype.dotProduct = function (a, b) {
        var product = a.reduce(function (memo, number, index) {
            return memo + number * b[index];
        }, 0);
        return product;
    };
    return EggnogCalculator;
}());
exports.EggnogCalculator = EggnogCalculator;
