"use strict";
exports.__esModule = true;
exports.NiceCheck = void 0;
var FORBIDDEN_SUBSTRINGS = [
    'ab',
    'cd',
    'pq',
    'xy',
];
var VOWELS = ['a', 'e', 'i', 'o', 'u'];
var NiceCheck = /** @class */ (function () {
    function NiceCheck(input) {
        this.input = input;
    }
    NiceCheck.prototype.isNice = function () {
        return (this.containsThreeVowels()
            && this.containsADoubleLetter()
            && !this.containsAForbiddenString());
    };
    NiceCheck.prototype.isNiceV2 = function () {
        return (this.containsRepeatingTwoLetters()
            && this.containsSandwich());
    };
    NiceCheck.prototype.containsSandwich = function () {
        for (var i = 0; i < this.input.length - 2; i++) {
            if (this.input[i] === this.input[i + 2]) {
                return true;
            }
        }
        return false;
    };
    NiceCheck.prototype.containsRepeatingTwoLetters = function () {
        for (var i = 0; i < this.input.length - 3; i++) {
            for (var j = i + 2; j < this.input.length - 1; j++) {
                if (this.input.slice(i, i + 2) === this.input.slice(j, j + 2)) {
                    return true;
                }
            }
        }
        return false;
    };
    NiceCheck.prototype.containsThreeVowels = function () {
        var count = 0;
        for (var i = 0; i < this.input.length; i++) {
            if (VOWELS.includes(this.input[i])) {
                count++;
            }
        }
        return count >= 3;
    };
    NiceCheck.prototype.containsADoubleLetter = function () {
        for (var i = 0; i < this.input.length - 1; i++) {
            if (this.input[i] === this.input[i + 1]) {
                return true;
            }
        }
        return false;
    };
    NiceCheck.prototype.containsAForbiddenString = function () {
        for (var i = 0; i < this.input.length - 1; i++) {
            if (FORBIDDEN_SUBSTRINGS.includes(this.input.slice(i, i + 2))) {
                return true;
            }
        }
        return false;
    };
    return NiceCheck;
}());
exports.NiceCheck = NiceCheck;
