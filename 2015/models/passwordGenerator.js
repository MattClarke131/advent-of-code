"use strict";
exports.__esModule = true;
exports.PasswordGenerator = void 0;
var A_CODE = 'a'.charCodeAt(0);
var FORBIDDEN_CHARS = ['i', 'o', 'l'];
var FORBIDDEN_CHAR_CODES = FORBIDDEN_CHARS
    .map(function (character) { return character.charCodeAt(0) - A_CODE; });
var PasswordGenerator = /** @class */ (function () {
    function PasswordGenerator() {
    }
    PasswordGenerator.prototype.passwordIsValid = function (password) {
        var passwordAsCharCodes = this.encode(password);
        return this.passwordCodeIsValid(passwordAsCharCodes);
    };
    PasswordGenerator.prototype.passwordCodeIsValid = function (passwordAsCharCodes) {
        return (this.passwordContainsIncreasingStraight(passwordAsCharCodes)
            && !this.passwordContainsForbiddenCharCodes(passwordAsCharCodes)
            && this.passwordContainsTwoPairsOfLetters(passwordAsCharCodes));
    };
    PasswordGenerator.prototype.encode = function (password) {
        return password
            .split('')
            .map(function (character) { return character.charCodeAt(0) - A_CODE; });
    };
    PasswordGenerator.prototype.decode = function (password) {
        return password
            .map(function (character) { return String.fromCharCode(character + A_CODE); })
            .join('');
    };
    PasswordGenerator.prototype.passwordContainsIncreasingStraight = function (password) {
        for (var i = 0; i < password.length - 2; i++) {
            if (this.codesAreIncreasing(password.slice(i, i + 3))) {
                return true;
            }
        }
        return false;
    };
    PasswordGenerator.prototype.codesAreIncreasing = function (codes) {
        return (codes[0] === codes[1] - 1
            && codes[1] === codes[2] - 1);
    };
    PasswordGenerator.prototype.passwordContainsForbiddenCharCodes = function (charCodes) {
        for (var i = 0; i < charCodes.length; i++) {
            if (FORBIDDEN_CHAR_CODES.includes(charCodes[i])) {
                return true;
            }
        }
        return false;
    };
    PasswordGenerator.prototype.passwordContainsTwoPairsOfLetters = function (password) {
        var i = 0, numPairs = 0;
        while (i < password.length - 1) {
            if (password[i] === password[i + 1]) {
                numPairs++;
                i += 2;
            }
            else {
                i++;
            }
        }
        return numPairs >= 2;
    };
    PasswordGenerator.prototype.getNextPassword = function (password) {
        var currentTestPassword = password
            .slice()
            .split('')
            .map(function (character) { return character.charCodeAt(0) - A_CODE; });
        var i = 0;
        do {
            currentTestPassword = this.getNextTestPassword(currentTestPassword);
            i++;
        } while (!this.passwordCodeIsValid(currentTestPassword));
        return this.decode(currentTestPassword);
    };
    PasswordGenerator.prototype.getNextTestPassword = function (testPassword) {
        var nextPassword = testPassword.slice();
        if (this.passwordContainsForbiddenCharCodes(nextPassword)) {
            for (var i = nextPassword.length - 1; i >= 0; i--) {
                if (FORBIDDEN_CHAR_CODES.includes(nextPassword[i])) {
                    nextPassword[i]++;
                    for (var j = i + 1; j < nextPassword.length; j++) {
                        nextPassword[j] = 0;
                    }
                    return nextPassword;
                }
            }
        }
        nextPassword[nextPassword.length - 1]++;
        for (var i = nextPassword.length - 1; i >= 0; i--) {
            // skip any forbidden characters
            if (FORBIDDEN_CHAR_CODES.includes(nextPassword[i])) {
                nextPassword[i]++;
            }
            // rollover to next place
            if (nextPassword[i] >= 26) {
                if (i === 0) {
                    throw ('You have to implement creating new number places');
                }
                nextPassword[i] = 0;
                nextPassword[i - 1]++;
            }
        }
        return nextPassword;
    };
    return PasswordGenerator;
}());
exports.PasswordGenerator = PasswordGenerator;
