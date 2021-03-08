"use strict";
exports.__esModule = true;
var computer_1 = require("./computer");
var stringInput = [
    'inc a',
    'jio a, +2',
    'tpl a',
    'inc a',
];
describe('Computer', function () {
    describe('runProgram(program)', function () {
        test('example program sets a to 2', function () {
            var program = new computer_1.Program(stringInput);
            var computer = new computer_1.Computer();
            computer.runProgram(program);
            var expectedA = 2;
            var actualA = computer.getA();
            expect(actualA).toBe(expectedA);
        });
    });
});
