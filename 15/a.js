"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var cookie_1 = require("../models/cookie");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop();
var optimalCookieGenerator = cookie_1.OptimalCookieGenerator.fromString(inputString);
var highScore = optimalCookieGenerator.getOptimalCookieScore();
console.log(highScore);
