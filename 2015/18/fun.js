"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var lifeGrid_1 = require("../models/lifeGrid");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop();
var lifeGrid = new lifeGrid_1.LifeGrid(inputString);
var steps = 1000;
lifeGrid.runForFun(1000);
