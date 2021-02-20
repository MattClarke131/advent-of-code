"use strict";
exports.__esModule = true;
exports.LightGrid = void 0;
var LightGrid = /** @class */ (function () {
    function LightGrid(instructions, size) {
        if (size === void 0) { size = 1000; }
        this.size = size;
        var parsedInstructions = instructions.map(function (instruction) { return new Instruction(instruction); });
        this.populateGrid();
        this.applyAllInstructions(parsedInstructions);
    }
    LightGrid.prototype.countOnLights = function () {
        var count = 0;
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                count += this.lightGrid[i][j];
            }
        }
        return count;
    };
    LightGrid.prototype.populateGrid = function () {
        this.lightGrid = {};
        for (var i = 0; i < this.size; i++) {
            this.lightGrid[i] = {};
            for (var j = 0; j < this.size; j++) {
                this.lightGrid[i][j] = 0;
            }
        }
    };
    LightGrid.prototype.applyAllInstructions = function (instructions) {
        var _this = this;
        instructions.forEach(function (instruction) { return _this.applyInstruction(instruction); });
    };
    LightGrid.prototype.applyInstruction = function (instruction) {
        switch (instruction.getAction()) {
            case 'turn on': {
                this.turnOnLights(instruction);
                break;
            }
            case 'turn off': {
                this.turnOffLights(instruction);
                break;
            }
            case 'toggle': {
                this.toggleLights(instruction);
                break;
            }
        }
    };
    LightGrid.prototype.turnOnLights = function (instruction) {
        for (var x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
            for (var y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
                this.lightGrid[x][y] += 1;
            }
        }
    };
    LightGrid.prototype.turnOffLights = function (instruction) {
        for (var x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
            for (var y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
                this.lightGrid[x][y] -= 1;
                this.lightGrid[x][y] = Math.max(this.lightGrid[x][y], 0);
            }
        }
    };
    LightGrid.prototype.toggleLights = function (instruction) {
        for (var x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
            for (var y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
                this.lightGrid[x][y] += 2;
            }
        }
    };
    return LightGrid;
}());
exports.LightGrid = LightGrid;
var Instruction = /** @class */ (function () {
    function Instruction(instruction) {
        this.action = this.parseAction(instruction);
        this.lowerCoord = this.parseLowerCoord(instruction);
        this.upperCoord = this.parseUpperCoord(instruction);
    }
    Instruction.prototype.getLowerCoord = function () {
        return this.lowerCoord;
    };
    Instruction.prototype.getUpperCoord = function () {
        return this.upperCoord;
    };
    Instruction.prototype.getAction = function () {
        return this.action;
    };
    Instruction.prototype.parseAction = function (instruction) {
        switch (instruction.slice(0, 7)) {
            case 'toggle ': {
                return 'toggle';
                break;
            }
            case 'turn on': {
                return 'turn on';
                break;
            }
            case 'turn of': {
                return 'turn off';
                break;
            }
        }
    };
    Instruction.prototype.parseLowerCoord = function (instruction) {
        var startIndex;
        switch (instruction.slice(6, 7)) {
            case ' ': {
                startIndex = 7;
                break;
            }
            case 'n': {
                startIndex = 8;
                break;
            }
            case 'f': {
                startIndex = 9;
                break;
            }
        }
        var commaIndex = instruction.indexOf(',');
        var endIndex = instruction.indexOf(' through');
        return {
            x: parseInt(instruction.slice(startIndex, commaIndex)),
            y: parseInt(instruction.slice(commaIndex + 1, endIndex))
        };
    };
    Instruction.prototype.parseUpperCoord = function (instruction) {
        var strCoord = instruction.slice(instruction.indexOf('through ') + 8);
        var commaIndex = strCoord.indexOf(',');
        return {
            x: parseInt(strCoord.slice(0, commaIndex)),
            y: parseInt(strCoord.slice(commaIndex + 1))
        };
    };
    return Instruction;
}());
