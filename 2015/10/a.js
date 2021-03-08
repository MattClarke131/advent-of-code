"use strict";
exports.__esModule = true;
var lookAndSay_1 = require("../models/lookAndSay");
var input = 1113222113;
var lookAndSay = new lookAndSay_1.LookAndSay(input);
console.log(lookAndSay.getNthNumber(40).length);
