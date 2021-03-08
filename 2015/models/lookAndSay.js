"use strict";
exports.__esModule = true;
exports.LookAndSay = void 0;
var LookAndSay = /** @class */ (function () {
    function LookAndSay(input) {
        this.input = input.toString();
    }
    LookAndSay.prototype.getNthNumber = function (n) {
        var result = this.input;
        for (var i = 0; i < n; i++) {
            result = this.getNextNumber(result);
        }
        return result;
    };
    LookAndSay.prototype.getNextNumber = function (n) {
        var groupedDigits = this.getGroupedDigits(n);
        return this.getNumberFromGroupedDigits(groupedDigits);
    };
    LookAndSay.prototype.getGroupedDigits = function (n) {
        var digits = n.toString().split('');
        var i = 0, currentDigit = digits[0], groupedDigits = [digits[0]];
        while (i < digits.length - 1) {
            if (digits[i + 1] === currentDigit) {
                groupedDigits[groupedDigits.length - 1] += digits[i + 1];
            }
            else {
                currentDigit = digits[i + 1];
                groupedDigits.push(currentDigit);
            }
            i++;
        }
        return groupedDigits;
    };
    LookAndSay.prototype.getNumberFromGroupedDigits = function (digitGroups) {
        var groupObjects = digitGroups
            .map(function (group) { return { digit: group[0], amount: group.length }; });
        var numberParts = groupObjects.map(function (obj) { return obj.amount.toString() + obj.digit; });
        var numberString = numberParts.join('');
        return numberString;
    };
    return LookAndSay;
}());
exports.LookAndSay = LookAndSay;
