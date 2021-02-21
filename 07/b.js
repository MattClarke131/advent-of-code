"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var wire_1 = require("../models/wire");
var instructionBooklet_1 = require("../models/instructionBooklet");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var formattedInputString = inputString.slice(0, inputString.length - 1);
var stringList = formattedInputString.split('\n');
var modifiedStringList = stringList.filter(function (instruction) {
    return instruction !== '19138 -> b';
});
modifiedStringList.push('16076 -> b');
var instructionBooklet = new instructionBooklet_1.InstructionBooklet(modifiedStringList);
var wireAInstruction = instructionBooklet.getInstructionFromIdentifier('a');
var wireA = new wire_1.Wire(wireAInstruction, instructionBooklet);
var value = wireA.getOutput();
console.log(value);
