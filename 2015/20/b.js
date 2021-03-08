"use strict";
exports.__esModule = true;
var house_1 = require("../models/house");
var house = new house_1.House();
var input = 33100000;
var answer = house.firstHouseToReachWithReasonableElves(input);
console.log(answer);
