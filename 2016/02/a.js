"use strict";
exports.__esModule = true;
var fileparser_1 = require("../../fileparser");
var keypadCalculator_1 = require("../models/keypadCalculator");
var fileParser = new fileparser_1["default"]('2016/02/input.txt');
var parsedInput = fileParser.getArrayFromMultiLine();
var keypadCalculator = new keypadCalculator_1["default"](parsedInput);
var code = keypadCalculator.getBathroomCode();
console.log(parsedInput);
console.log(code);
