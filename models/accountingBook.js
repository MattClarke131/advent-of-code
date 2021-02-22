"use strict";
exports.__esModule = true;
exports.AccountingBook = void 0;
var AccountingBook = /** @class */ (function () {
    function AccountingBook() {
    }
    AccountingBook.getNumberSum = function (inputString) {
        var total = 0;
        for (var i = 0; i < inputString.length; i++) {
            var character = inputString[i];
            if (this.charIsNumber(character)) {
                var currentNumber = this.getNumber(inputString, i);
                total += currentNumber;
                i += currentNumber.toString().length - 1;
            }
        }
        return total;
    };
    AccountingBook.charIsNumber = function (character) {
        var charCode = character.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    };
    AccountingBook.getNumber = function (inputString, index) {
        var numberIsNegative = inputString[index - 1] === '-';
        var newNumber = inputString[index].slice();
        for (var i = index + 1; i < inputString.length && this.charIsNumber(inputString[i]); i++) {
            newNumber = newNumber.concat(inputString[i]);
        }
        return Number(newNumber) * (numberIsNegative ? -1 : 1);
    };
    return AccountingBook;
}());
exports.AccountingBook = AccountingBook;
