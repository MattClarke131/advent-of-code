"use strict";
exports.__esModule = true;
var fileparser_1 = require("../../fileparser");
var triangle_1 = require("../models/triangle");
var fileParser = new fileparser_1["default"]('2016/03/input.txt');
var parsedInput = fileParser.getArrayFromMultiLine();
var legalTriangles = triangle_1["default"].getNumOfLegalTriangles(parsedInput);
console.log(legalTriangles);
