"use strict";
exports.__esModule = true;
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(dimensions) {
        this.parseDimensions(dimensions);
    }
    Box.prototype.getRequiredWrapping = function () {
        return this.requiredWrapping;
    };
    Box.prototype.getRequiredRibbon = function () {
        return this.requiredRibbon;
    };
    Box.prototype.parseDimensions = function (dimensions) {
        var dimensionsArray = dimensions
            .split('x')
            .map(function (str) { return parseInt(str); });
        this.height = dimensionsArray[0];
        this.width = dimensionsArray[1];
        this.depth = dimensionsArray[2];
        this.volume = this.height * this.width * this.depth;
        this.sides = [
            this.height * this.width,
            this.height * this.depth,
            this.width * this.depth,
        ];
        this.surfaceArea = 2 * this.sides.reduce(function (memo, side) { return memo + side; });
        this.requiredWrapping =
            this.surfaceArea + Math.min.apply(Math, this.sides);
        this.requiredRibbon =
            2 *
                [this.height, this.width, this.depth]
                    .sort(function (a, b) { return a - b; })
                    .slice(0, 2)
                    .reduce(function (memo, dimension) { return memo + dimension; })
                + this.volume;
    };
    return Box;
}());
exports.Box = Box;
