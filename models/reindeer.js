"use strict";
exports.__esModule = true;
exports.Reindeer = void 0;
var Reindeer = /** @class */ (function () {
    function Reindeer(name, speed, endurance, rest) {
        this.name = name;
        this.speed = speed;
        this.endurance = endurance;
        this.rest = rest;
    }
    Reindeer.fromString = function (inputString) {
        var words = inputString.split(' ');
        return new Reindeer(words[0], // name
        parseInt(words[3]), // speed
        parseInt(words[6]), // endurance
        parseInt(words[13]) // rest
        );
    };
    Reindeer.prototype.getDistanceTravelled = function (time) {
        var remainingTime = time;
        var distance = 0;
        var isFlying = true;
        while (remainingTime > 0) {
            if (isFlying) {
                if (remainingTime >= this.endurance) {
                    distance += this.endurance * this.speed;
                    remainingTime -= this.endurance;
                }
                else { // remaining Time < this.endurance
                    distance += remainingTime * this.speed;
                    remainingTime = 0;
                }
            }
            else { // !isFlying
                remainingTime -= this.rest;
            }
            isFlying = !isFlying;
        }
        return distance;
    };
    return Reindeer;
}());
exports.Reindeer = Reindeer;
