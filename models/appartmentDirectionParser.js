"use strict";
exports.__esModule = true;
exports.AppartmentDirectionParser = void 0;
var AppartmentDirectionParser = /** @class */ (function () {
    function AppartmentDirectionParser(textDirections) {
        this.textDirections = textDirections;
        this.firstBasementFloor = 0;
        this.parse();
    }
    AppartmentDirectionParser.prototype.getFloor = function () {
        return this.floor;
    };
    AppartmentDirectionParser.prototype.getFirstBasementFloor = function () {
        return this.firstBasementFloor;
    };
    AppartmentDirectionParser.prototype.parse = function () {
        var count = 0;
        for (var i = 0; i < this.textDirections.length; i++) {
            var currentDirection = this.textDirections[i];
            if (currentDirection === '(') {
                count++;
            }
            else if (currentDirection === ')') {
                count--;
            }
            if (this.firstBasementFloor === 0 && count < 0) {
                this.firstBasementFloor = i + 1;
            }
        }
        this.floor = count;
    };
    return AppartmentDirectionParser;
}());
exports.AppartmentDirectionParser = AppartmentDirectionParser;
