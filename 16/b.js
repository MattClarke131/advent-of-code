"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var auntSue_1 = require("../models/auntSue");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop();
var ticker = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
};
var auntSues = inputString.map(function (str) { return new auntSue_1.AuntSue(str); });
var matchingSue = auntSues.find(function (sue) { return sue.matchesAnalysis2(ticker); });
console.log(matchingSue);
