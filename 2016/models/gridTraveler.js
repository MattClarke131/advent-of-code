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
        this.instructions.forEach(function (instruction) { return _this.performInstruction(instruction); });
    };
    GridTraveler.prototype.performInstruction = function (instruction) {
        this.direction = this.getNextDirection(instruction.turn, this.direction);
        var nextTurningPoint = this.getNextTurningPoint(this.direction, instruction.steps, { x: this.x, y: this.y });
        this.x = nextTurningPoint.x;
        this.y = nextTurningPoint.y;
    };
    GridTraveler.prototype.getNextDirection = function (turn, direction) {
        var newDirection = direction + (turn === 'R' ? 5 : 3);
        newDirection = newDirection % 4;
        return newDirection;
    };
    GridTraveler.prototype.getNextTurningPoint = function (direction, steps, startPoint) {
        switch (direction) {
            case dir['L']:
                return {
                    x: startPoint.x - steps,
                    y: startPoint.y
                };
            case dir['U']:
                return {
                    x: startPoint.x,
                    y: startPoint.y + steps
                };
            case dir['R']:
                return {
                    x: startPoint.x + steps,
                    y: startPoint.y
                };
            case dir['D']:
                return {
                    x: startPoint.x,
                    y: startPoint.y - steps
                };
        }
    };
    GridTraveler.prototype.getFinalDistance = function () {
        this.x = 0;
        this.y = 0;
        this.performInstructions();
        return Math.abs(this.x) + Math.abs(this.y);
    };
    GridTraveler.prototype.getFirstDoubleLocationDistance = function () {
        var currentPoint = {
            x: 0,
            y: 0
        };
        var currentDirection = dir['U'];
        var travelledSegments = [];
        for (var i = 0; i < this.instructions.length; i++) {
            var instruction = this.instructions[i];
            var nextSegment = this.generateNextSegment(instruction, currentDirection, currentPoint);
            currentPoint = nextSegment.end;
            currentDirection = this.getNextDirection(instruction.turn, currentDirection);
            var intersectingPoint = this.getIntersectingPoint(travelledSegments, nextSegment);
            if (intersectingPoint !== null) {
                return Math.abs(intersectingPoint.x) + Math.abs(intersectingPoint.y);
            }
            travelledSegments.push(nextSegment);
        }
        return 0;
    };
    GridTraveler.prototype.generateNextSegment = function (instruction, currentDirection, startPoint) {
        var nextDirection = this.getNextDirection(instruction.turn, currentDirection);
        var endPoint = this.getNextTurningPoint(nextDirection, instruction.steps, startPoint);
        return {
            start: startPoint,
            end: endPoint
        };
    };
    GridTraveler.prototype.getIntersectingPoint = function (travelledSegments, currentSegment) {
        // The intersection formula will count the turning point as an intersection.
        // We do not test to most recent segment to ignore this point.
        for (var i = 0; i < travelledSegments.length - 1; i++) {
            var segment = travelledSegments[i];
            if (this.segmentsIntersect(segment, currentSegment)) {
                var intersectingPoint = this.getFirstIntersectingPoint(currentSegment, segment);
                return intersectingPoint;
            }
        }
        return null;
    };
    GridTraveler.prototype.segmentsIntersect = function (segmentA, segmentB) {
        return ((this.numberInRange(segmentA.start.x, segmentB.start.x, segmentB.end.x)
            && this.numberInRange(segmentB.start.y, segmentA.start.y, segmentA.end.y))
            || (this.numberInRange(segmentA.start.y, segmentB.start.y, segmentB.end.y)
                && this.numberInRange(segmentB.start.x, segmentA.start.x, segmentA.end.x)));
    };
    GridTraveler.prototype.numberInRange = function (n, a, b) {
        return (n >= a && n <= b) || (n <= a && n >= b);
    };
    GridTraveler.prototype.getFirstIntersectingPoint = function (currentSegment, segment) {
        if (currentSegment.start.x > currentSegment.end.x) {
            for (var x = currentSegment.start.x; x >= currentSegment.end.x; x--) {
                if (this.numberInRange(x, segment.start.x, segment.end.x)) {
                    return {
                        x: x,
                        y: currentSegment.start.y
                    };
                }
            }
        }
        else if (currentSegment.start.x < currentSegment.end.x) {
            for (var x = currentSegment.start.x; x <= currentSegment.end.x; x++) {
                if (this.numberInRange(x, segment.start.x, segment.end.x)) {
                    return {
                        x: x,
                        y: currentSegment.start.y
                    };
                }
            }
        }
        else if (currentSegment.start.y > currentSegment.end.y) {
            for (var y = currentSegment.start.y; y >= currentSegment.end.y; y--) {
                if (this.numberInRange(y, segment.start.y, segment.end.y)) {
                    return {
                        x: currentSegment.start.x,
                        y: y
                    };
                }
            }
        }
        else if (currentSegment.start.y < currentSegment.end.y) {
            for (var y = currentSegment.start.y; y <= currentSegment.end.y; y++) {
                if (this.numberInRange(y, segment.start.y, segment.end.y)) {
                    return {
                        x: currentSegment.start.x,
                        y: y
                    };
                }
            }
        }
        else {
            throw ('getFirstIntersectingPoint() should only be called if there is an intersecting point');
        }
    };
    return GridTraveler;
}());
exports["default"] = GridTraveler;
