"use strict";
exports.__esModule = true;
var passwordGenerator_1 = require("../models/passwordGenerator");
var input = 'hxbxxyzz';
var passwordGenerator = new passwordGenerator_1.PasswordGenerator();
console.log(passwordGenerator.getNextPassword(input));
