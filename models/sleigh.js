"use strict";
exports.__esModule = true;
exports.Sleigh = void 0;
var combinatorics_1 = require("./combinatorics");
var Sleigh = /** @class */ (function () {
    function Sleigh(presents) {
        var reverseSortedPresents = presents.sort(function (a, b) { return b - a; });
        this.presents = reverseSortedPresents;
        this.targetSum = this.presents.reduce(function (memo, present) { return memo + present; }) / 3;
        this.bestEntanglement = 0;
        this.minSize = this.calcMinSize(presents);
        this.maxSize = this.calcMaxSize(presents);
    }
    Sleigh.prototype.calcMinSize = function (presents) {
        var total = 0;
        var reverseSortedPresents = presents.sort(function (a, b) { return b - a; });
        for (var i = 1; i <= presents.length; i++) {
            total += reverseSortedPresents[i];
            if (total >= this.targetSum) {
                return i;
            }
        }
        return 0;
    };
    Sleigh.prototype.calcMaxSize = function (presents) {
        var total = 0;
        var sortedPresents = presents.sort(function (a, b) { return a - b; });
        for (var i = 1; i <= presents.length; i++) {
            total += sortedPresents[i];
            if (total >= this.targetSum) {
                return i;
            }
        }
        return 0;
    };
    Sleigh.prototype.getSmallestGroup = function () {
        this.setSmallestGroup();
        return this.bestEntanglement;
    };
    Sleigh.prototype.setSmallestGroup = function () {
        var maxSize = this.maxSize;
        var currentSize = this.minSize;
        while (currentSize <= this.maxSize && this.bestEntanglement === 0) {
            this.setBestEntanglementBySize(currentSize);
            currentSize++;
        }
    };
    Sleigh.prototype.calcEntanglement = function (packages) {
        return packages.reduce(function (memo, pack) { return memo * pack; });
    };
    Sleigh.prototype.setBestEntanglementBySize = function (size) {
        var setEntanglementIfValid = this.setEntanglementIfValid.bind(this);
        combinatorics_1.Combinatorics.iterateComboWithCallback(this.presents, size, setEntanglementIfValid);
    };
    Sleigh.prototype.setEntanglementIfValid = function (combination) {
        if (!this.comboIsValidAmount(combination)) {
            return;
        }
        var remainingPresents = this.presents.filter(function (p) { return !combination.includes(p); });
        if (!this.canCreateOtherGroups(remainingPresents)) {
            return;
        }
        if (this.bestEntanglement === 0) {
            this.bestEntanglement = this.calcEntanglement(combination);
        }
        else {
            this.bestEntanglement = Math.min(this.calcEntanglement(combination), this.bestEntanglement);
        }
        console.log(this.bestEntanglement);
    };
    Sleigh.prototype.comboIsValidAmount = function (combo) {
        return combo.reduce(function (n, memo) { return n + memo; }) === this.targetSum;
    };
    Sleigh.prototype.canCreateOtherGroups = function (remainingPackages) {
        var result = false;
        var currentSize = this.minSize;
        var _loop_1 = function () {
            var targetSum = this_1.targetSum;
            var comboIsValidAmount = this_1.comboIsValidAmount.bind(this_1);
            var callback = function (combo) { if (comboIsValidAmount(combo)) {
                result = true;
            } };
            combinatorics_1.Combinatorics.iterateComboWithCallback(remainingPackages, currentSize, callback);
            currentSize++;
        };
        var this_1 = this;
        while (!result && currentSize <= remainingPackages.length - this.minSize) {
            _loop_1();
        }
        return result;
    };
    return Sleigh;
}());
exports.Sleigh = Sleigh;
