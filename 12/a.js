"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var accountingBook_1 = require("../models/accountingBook");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
console.log(accountingBook_1.AccountingBook.getNumberSum(inputString));
