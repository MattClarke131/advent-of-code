"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var computer_1 = require("../models/computer");
var pathName = path.join(__dirname, './input.txt');
var inputStrings = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop();
var program = new computer_1.Program(inputStrings);
var computer = new computer_1.Computer();
computer.runProgram(program);
console.log(computer.getB());
