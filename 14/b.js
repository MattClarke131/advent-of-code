"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var reindeer_1 = require("../models/reindeer");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop();
var reindeers = inputString.map(function (str) { return reindeer_1.ReindeerInRace.fromString(str); });
var currentSecond = 1;
var runRace = function (time) {
    while (currentSecond <= 2503) {
        AddPointToWinningReindeer(reindeers, currentSecond);
        currentSecond++;
    }
};
var AddPointToWinningReindeer = function (reindeers, time) {
    var winningReindeers = getWinningReindeers(reindeers, time);
    winningReindeers.forEach(function (reindeer) { return reindeer.points++; });
};
var getWinningReindeers = function (reindeers, time) {
    var maxDistance = Math.max.apply(Math, reindeers.map(function (reindeer) { return reindeer.getDistanceTravelled(time); }));
    var winningReindeers = reindeers.filter(function (reindeer) {
        return reindeer.getDistanceTravelled(time) === maxDistance;
    });
    return winningReindeers;
};
runRace(2503);
var pointsEarned = reindeers.map(function (reindeer) { return reindeer.points; });
console.log(Math.max.apply(Math, pointsEarned));
