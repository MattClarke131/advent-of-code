"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var routeCalculator_1 = require("../models/routeCalculator");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var formattedInputString = inputString.slice(0, inputString.length - 1);
var stringList = formattedInputString.split('\n');
var routeCalculator = new routeCalculator_1.RouteCalculator(stringList);
console.log(routeCalculator.calculateShortestRoute());
