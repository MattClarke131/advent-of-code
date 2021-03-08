"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var md5Calc_1 = require("../models/md5Calc");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var formattedInputString = inputString.slice(0, inputString.length - 1);
var md5Calc = new md5Calc_1.Md5Calc(formattedInputString);
var hash = md5Calc.getLowestHashWithNZeroes(5);
console.log(hash);