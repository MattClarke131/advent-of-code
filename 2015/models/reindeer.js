"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ReindeerInRace = exports.Reindeer = void 0;
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
var ReindeerInRace = /** @class */ (function (_super) {
    __extends(ReindeerInRace, _super);
    function ReindeerInRace(name, speed, endurance, rest) {
        var _this = _super.call(this, name, speed, endurance, rest) || this;
        _this.points = 0;
        return _this;
    }
    ReindeerInRace.fromString = function (inputString) {
        var words = inputString.split(' ');
        return new ReindeerInRace(words[0], // name
        parseInt(words[3]), // speed
        parseInt(words[6]), // endurance
        parseInt(words[13]) // rest
        );
    };
    return ReindeerInRace;
}(Reindeer));
exports.ReindeerInRace = ReindeerInRace;
