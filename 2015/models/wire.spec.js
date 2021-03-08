"use strict";
exports.__esModule = true;
var wire_1 = require("./wire");
var instructionBooklet_1 = require("./instructionBooklet");
var mockInstructions1 = [
    '123 -> x',
    '456 -> y',
    'x AND y -> d',
    'x OR y -> e',
    'x LSHIFT 2 -> f',
    'y RSHIFT 2 -> g',
    'NOT x -> h',
    'NOT y -> i',
];
var instructionBooklet1 = new instructionBooklet_1.InstructionBooklet(mockInstructions1);
var mockInstructions2 = [
    '123 -> ab',
    '456 -> cd',
    'ab AND cd -> e'
];
var instructionBooklet2 = new instructionBooklet_1.InstructionBooklet(mockInstructions2);
describe('Wire', function () {
    describe('getOutput', function () {
        describe('mockInstructions11', function () {
            test('d should be 72', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('d');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(72);
            });
            test('e should be 507', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('e');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(507);
            });
            test('f should be 492', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('f');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(492);
            });
            test('g should be 114', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('g');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(114);
            });
            test('h should be 65412', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('h');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(65412);
            });
            test('i should be 65079', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('i');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(65079);
            });
            test('x should be 123', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('x');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(123);
            });
            test('y should be 456', function () {
                var wireInstruction = instructionBooklet1.getInstructionFromIdentifier('y');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet1);
                var result = wire.getOutput();
                expect(result).toBe(456);
            });
        });
        describe('mockInstructions2', function () {
            test('ab should be 123', function () {
                var wireInstruction = instructionBooklet2.getInstructionFromIdentifier('ab');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet2);
                var result = wire.getOutput();
                expect(result).toBe(123);
            });
            test('cd should be 456', function () {
                var wireInstruction = instructionBooklet2.getInstructionFromIdentifier('cd');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet2);
                var result = wire.getOutput();
                expect(result).toBe(456);
            });
            test('e should be 72', function () {
                var wireInstruction = instructionBooklet2.getInstructionFromIdentifier('e');
                var wire = new wire_1.Wire(wireInstruction, instructionBooklet2);
                var result = wire.getOutput();
                expect(result).toBe(72);
            });
        });
    });
});
