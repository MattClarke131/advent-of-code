"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var niceCheck_1 = require("../models/niceCheck");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var formattedInputString = inputString.slice(0, inputString.length - 1);
var stringList = formattedInputString.split('\n');
var total = stringList
    .reduce(function (memo, str) {
    console.log(str);
    var niceCheck = new niceCheck_1.NiceCheck(str);
    return niceCheck.isNice() ? memo + 1 : memo;
}, 0);
console.log(total);
