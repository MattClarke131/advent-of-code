"use strict";
exports.__esModule = true;
var snowCodeGenerator_1 = require("../models/snowCodeGenerator");
var firstNumber = 20151125;
var row = 2981;
var column = 3075;
var snowCodeGenerator = new snowCodeGenerator_1.SnowCodeGenerator(firstNumber, row, column);
var result = snowCodeGenerator.getCode();
console.log(result);
