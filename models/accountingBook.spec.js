"use strict";
exports.__esModule = true;
var accountingBook_1 = require("./accountingBook");
describe('AccountingBook', function () {
    describe('getNumberSum()', function () {
        test('`[1,2,3]` should return 6', function () {
            var input = "[1,2,3]";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 6;
            expect(actual).toBe(expected);
        });
        test('`{"a":2, "b":4}` should return 6', function () {
            var input = "\"{\"a\":2, \"b\":4}\"";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 6;
            expect(actual).toBe(expected);
        });
        test('`[[[3]]]` should return 3', function () {
            var input = "[[[3]]]";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 3;
            expect(actual).toBe(expected);
        });
        test('`{"a}:{"b":4},"c":-1` should return 3', function () {
            var input = "{\"a}:{\"b\":4},\"c\":-1";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 3;
            expect(actual).toBe(expected);
        });
        test('`{"a":[-1,1]}` should return 0', function () {
            var input = "{\"a\":[-1,1]}";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 0;
            expect(actual).toBe(expected);
        });
        test('`[-1,{"a":1}]` should return 0', function () {
            var input = "[-1,{\"a\":1}]";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 0;
            expect(actual).toBe(expected);
        });
        test('`[]` should return 0', function () {
            var input = "[]";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 0;
            expect(actual).toBe(expected);
        });
        test('`{}` should return 0', function () {
            var input = "{}";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 0;
            expect(actual).toBe(expected);
        });
        test('`23` should return 23', function () {
            var input = "23";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNumberSum();
            var expected = 23;
            expect(actual).toBe(expected);
        });
    });
    describe('getNonRedNumberSum()', function () {
        test('`[1,2,3]` should return 6', function () {
            var input = "[1,2,3]";
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNonRedNumberSum();
            var expected = 6;
            expect(actual).toBe(expected);
        });
        test('`[1,{"c":"red","b":2},3]` should return 4', function () {
            var input = '[1,{"c":"red","b":2},3]';
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNonRedNumberSum();
            var expected = 4;
            expect(actual).toBe(expected);
        });
        test('`[1,"red",5]` should return 6', function () {
            var input = '[1,"red",5]';
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNonRedNumberSum();
            var expected = 6;
            expect(actual).toBe(expected);
        });
        test('`{"d":"red","e":[1,2,3,4],"f":5}` should return 0', function () {
            var input = '{"d":"red","e":[1,2,3,4],"f":5}';
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNonRedNumberSum();
            var expected = 0;
            expect(actual).toBe(expected);
        });
        test('`more complicated object` should return 7', function () {
            var input = '[1,2,3,{"a":{},"b":{"x":"red"},"c":4}, {"d": -3}]';
            var accountingBook = new accountingBook_1.AccountingBook(input);
            var actual = accountingBook.getNonRedNumberSum();
            var expected = 7;
            expect(actual).toBe(expected);
        });
    });
});
