"use strict";
exports.__esModule = true;
var fileparser_1 = require("../../fileparser");
var gridTraveler_1 = require("../models/gridTraveler");
var fileParser = new fileparser_1["default"]('2016/01/input.txt');
var parsedInput = fileParser.getArrayFromSingleLine();
var gridTraveler = new gridTraveler_1["default"](parsedInput);
var distance = gridTraveler.getFirstDoubleLocationDistance();
console.log(distance);
