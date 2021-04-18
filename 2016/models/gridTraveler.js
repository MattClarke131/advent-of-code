"use strict";
exports.__esModule = true;
var dir = {
    L: 0,
    U: 1,
    R: 2,
    D: 3
};
var GridTraveler = /** @class */ (function () {
    function GridTraveler(inputArray) {
        this.instructions = this.parseInputArray(inputArray);
        this.x = 0;
        this.y = 0;
        this.direction = dir['U'];
        this.performInstructions();
    }
    GridTraveler.prototype.parseInputArray = function (inputArray) {
        return inputArray.map(function (instruction) {
            return {
                turn: instruction.substring(0, 1),
                steps: parseInt(instruction.substring(1))
            };
        });
    };
    GridTraveler.prototype.performInstructions = function () {
        var _this = this;
        this.instructions.forEach(function (instruction) {
            _this.direction += instruction.turn === 'R' ? 5 : 3;
            _this.direction = _this.direction % 4;
            switch (_this.direction) {
                case dir['L']:
                    _this.x -= instruction.steps;
                    break;
                case dir['U']:
                    _this.y += instruction.steps;
                    break;
                case dir['R']:
                    _this.x += instruction.steps;
                    break;
                case dir['D']:
                    _this.y -= instruction.steps;
                    break;
            }
        });
    };
    GridTraveler.prototype.getFinalDistance = function () {
        return Math.abs(this.x) + Math.abs(this.y);
    };
    return GridTraveler;
}());
exports["default"] = GridTraveler;
