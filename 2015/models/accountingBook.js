"use strict";
exports.__esModule = true;
exports.AccountingBook = void 0;
var AccountingBook = /** @class */ (function () {
    function AccountingBook(inputString) {
        this.inputString = inputString;
        this.json = JSON.parse(inputString);
    }
    AccountingBook.prototype.getNumberSum = function () {
        var total = 0;
        for (var i = 0; i < this.inputString.length; i++) {
            var character = this.inputString[i];
            if (this.charIsNumber(character)) {
                var currentNumber = this.getNumber(this.inputString, i);
                total += currentNumber;
                i += currentNumber.toString().length - 1;
            }
        }
        return total;
    };
    AccountingBook.prototype.charIsNumber = function (character) {
        var charCode = character.charCodeAt(0);
        return charCode >= 48 && charCode <= 57;
    };
    AccountingBook.prototype.getNumber = function (inputString, index) {
        var numberIsNegative = inputString[index - 1] === '-';
        var newNumber = inputString[index].slice();
        for (var i = index + 1; i < inputString.length && this.charIsNumber(inputString[i]); i++) {
            newNumber = newNumber.concat(inputString[i]);
        }
        return Number(newNumber) * (numberIsNegative ? -1 : 1);
    };
    AccountingBook.prototype.getNonRedNumberSum = function () {
        var nonRedJSON = this.getNonRedJSON(this.json);
        this.inputString = JSON.stringify(nonRedJSON);
        return this.getNumberSum();
    };
    AccountingBook.prototype.getNonRedJSON = function (json) {
        var _this = this;
        if (Array.isArray(json)) {
            return json.map(function (el) { return _this.getNonRedJSON(el); });
        }
        else if (typeof json === 'object') {
            if (Object.values(json).includes("red")) {
                return {};
            }
            else {
                var result = {};
                for (var key in json) {
                    result[key] = this.getNonRedJSON(json[key]);
                }
                return result;
            }
        }
        else {
            return json;
        }
    };
    return AccountingBook;
}());
exports.AccountingBook = AccountingBook;
