"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var box_1 = require("../models/box");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var dimensionsArray = inputString.split('\n');
dimensionsArray.pop();
var total = dimensionsArray
    .map(function (dimensions) {
    var box = new box_1.Box(dimensions);
    return box.getRequiredRibbon();
})
    .reduce(function (memo, num) { return memo + num; });
console.log(total);
