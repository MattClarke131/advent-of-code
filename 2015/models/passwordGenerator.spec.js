"use strict";
exports.__esModule = true;
var passwordGenerator_1 = require("./passwordGenerator");
describe('PasswordGenerator', function () {
    describe('passwordIsValid(password)', function () {
        // Invalid Passwords
        test('hijklmmn is invalid', function () {
            var input = 'hijklmmn';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeFalsy();
        });
        test('abbceffg is invalid', function () {
            var input = 'abbceffg';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeFalsy();
        });
        test('abbcegjk is invalid', function () {
            var input = 'abbcegjk';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeFalsy();
        });
        test('aabbcc is invalid', function () {
            var input = 'aabbcc';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeFalsy();
        });
        test('aabbpjy is invalid', function () {
            var input = 'aabbpjy';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeFalsy();
        });
        // Valid Passwords
        test('aabbcd is valid', function () {
            var input = 'aabbcd';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.passwordIsValid(input);
            expect(actual).toBeTruthy();
        });
    });
    describe('getNextPassword(password)', function () {
        test('the password after aabbca is aabbcd', function () {
            var input = 'aabbca';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.getNextPassword(input);
            var expected = 'aabbcd';
            expect(actual).toBe(expected);
        });
        test('the password after aabbphz is aabbpqr', function () {
            var input = 'aabbphz';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.getNextPassword(input);
            var expected = 'aabbpqr';
            expect(actual).toBe(expected);
        });
        test('the password after abcdefgh is abcdffaa', function () {
            var input = 'abcdefgh';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.getNextPassword(input);
            var expected = 'abcdffaa';
            expect(actual).toBe(expected);
        });
        test('the password after ghijklmn is ghjaabcc', function () {
            var input = 'ghijklmn';
            var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
            var actual = passwordGenerator.getNextPassword(input);
            var expected = 'ghjaabcc';
            expect(actual).toBe(expected);
        });
    });
});
