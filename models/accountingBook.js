"use strict";
exports.__esModule = true;
exports.AccountingBook = void 0;
var AccountingBook = /** @class */ (function () {
    function AccountingBook(inputString) {
        this.inputString = inputString;
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
        var redIndex = this.inputString.indexOf('red');
        while (redIndex !== -1) {
            this.inputString = this.filterRedAndParentIfObject(redIndex);
            redIndex = this.inputString.indexOf('red');
        }
        return this.getNumberSum();
    };
    AccountingBook.prototype.filterRedAndParentIfObject = function (redIndex) {
        var parentOpenData = this.getParentOpenData(redIndex);
        var parentCloseData = this.getParentCloseData(redIndex);
        if (parentOpenData === null || parentCloseData === null) {
            return this.inputString.replace('red', '');
        }
        else if (parentOpenData.charType === '[') {
            return this.inputString = this.inputString.replace('red', '');
        }
        else if (parentOpenData.charType === '{') {
            var beforeString = (this.inputString[parentOpenData.index - 1] === ":") ?
                this.inputString.slice(0, Math.max(parentOpenData.index - 4, 0))
                : this.inputString.slice(0, parentOpenData.index);
            var afterString = this.inputString.slice(parentCloseData.index + 2);
            return beforeString.concat(afterString);
        }
    };
    AccountingBook.prototype.getParentOpenData = function (redIndex) {
        var bracketCount = 0;
        var braceCount = 0;
        for (var i = redIndex; i >= 0; i--) {
            switch (this.inputString[i]) {
                case '[': {
                    bracketCount++;
                    break;
                }
                case ']': {
                    bracketCount--;
                    break;
                }
                case '{': {
                    braceCount++;
                    break;
                }
                case '}': {
                    braceCount--;
                    break;
                }
            }
            if (bracketCount === 1 && braceCount === 0) {
                return {
                    charType: '[',
                    index: i
                };
            }
            else if (braceCount === 1 && bracketCount === 0) {
                return {
                    charType: '{',
                    index: i
                };
            }
        }
        return null;
    };
    AccountingBook.prototype.getParentCloseData = function (redIndex) {
        var bracketCount = 0;
        var braceCount = 0;
        for (var i = redIndex; i < this.inputString.length; i++) {
            switch (this.inputString[i]) {
                case '[': {
                    bracketCount++;
                    break;
                }
                case ']': {
                    bracketCount--;
                    break;
                }
                case '{': {
                    braceCount++;
                    break;
                }
                case '}': {
                    braceCount--;
                    break;
                }
            }
            if (bracketCount === -1 && braceCount === 0) {
                return {
                    charType: '[',
                    index: i
                };
            }
            else if (braceCount === -1 && bracketCount === 0) {
                return {
                    charType: '{',
                    index: i
                };
            }
        }
        return null;
    };
    return AccountingBook;
}());
exports.AccountingBook = AccountingBook;
