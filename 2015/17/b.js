"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var eggnogCalculator_1 = require("../models/eggnogCalculator");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop();
var eggnogCalculator = new eggnogCalculator_1.EggnogCalculator(inputString);
var amount = 150;
console.log(eggnogCalculator.getNumberOfMinimalPermutationsForAmount(amount));
