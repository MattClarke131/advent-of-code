"use strict";
exports.__esModule = true;
exports.LifeGrid = void 0;
var wait = function (milliseconds) {
    var start = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - start < milliseconds);
};
var LifeGrid = /** @class */ (function () {
    function LifeGrid(textConfiguration) {
        // assuming grid is a square
        this.size = textConfiguration.length;
        this.lockedCorners = false;
        this.populateGrids();
        this.applyConfigurationToLifeGrid(textConfiguration);
    }
    LifeGrid.prototype.getLightsOnAfterSteps = function (n) {
        this.iterate(n);
        return this.countOnLights();
    };
    LifeGrid.prototype.lockCorners = function () {
        this.lockedCorners = true;
        this.applyLockedCorners();
    };
    LifeGrid.prototype.runForFun = function (steps) {
        for (var i = 0; i < steps; i++) {
            this.printGrid(this.lifeGrid);
            this.iterateOnce();
        }
    };
    LifeGrid.prototype.iterate = function (n) {
        for (var i = 0; i < n; i++) {
            this.iterateOnce();
        }
    };
    LifeGrid.prototype.iterateOnce = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.applyRulesToLight(i, j);
            }
        }
        this.applyTempGridToLifeGrid();
        if (this.lockedCorners) {
            this.applyLockedCorners();
        }
    };
    LifeGrid.prototype.applyLockedCorners = function () {
        this.lifeGrid[0][0] = true;
        this.lifeGrid[0][this.size - 1] = true;
        this.lifeGrid[this.size - 1][0] = true;
        this.lifeGrid[this.size - 1][this.size - 1] = true;
    };
    LifeGrid.prototype.applyRulesToLight = function (x, y) {
        if (this.lifeGrid[x][y]) {
            var numberOfOnNeighbors = this.getNumberOfOnNeighbors(x, y);
            this.tempGrid[x][y] = [2, 3].includes(this.getNumberOfOnNeighbors(x, y));
        }
        else {
            this.tempGrid[x][y] = this.getNumberOfOnNeighbors(x, y) === 3;
        }
    };
    LifeGrid.prototype.getNumberOfOnNeighbors = function (x, y) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var total = 0;
        total += !!((_a = this.lifeGrid[x - 1]) === null || _a === void 0 ? void 0 : _a[y - 1]) ? 1 : 0;
        total += !!((_b = this.lifeGrid[x - 1]) === null || _b === void 0 ? void 0 : _b[y]) ? 1 : 0;
        total += !!((_c = this.lifeGrid[x - 1]) === null || _c === void 0 ? void 0 : _c[y + 1]) ? 1 : 0;
        total += !!((_d = this.lifeGrid[x]) === null || _d === void 0 ? void 0 : _d[y - 1]) ? 1 : 0;
        total += !!((_e = this.lifeGrid[x]) === null || _e === void 0 ? void 0 : _e[y + 1]) ? 1 : 0;
        total += !!((_f = this.lifeGrid[x + 1]) === null || _f === void 0 ? void 0 : _f[y - 1]) ? 1 : 0;
        total += !!((_g = this.lifeGrid[x + 1]) === null || _g === void 0 ? void 0 : _g[y]) ? 1 : 0;
        total += !!((_h = this.lifeGrid[x + 1]) === null || _h === void 0 ? void 0 : _h[y + 1]) ? 1 : 0;
        return total;
    };
    LifeGrid.prototype.applyTempGridToLifeGrid = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.lifeGrid[i][j] = this.tempGrid[i][j];
            }
        }
    };
    LifeGrid.prototype.countOnLights = function () {
        var total = 0;
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                total += this.lifeGrid[i][j] ? 1 : 0;
            }
        }
        return total;
    };
    LifeGrid.prototype.populateGrids = function () {
        this.lifeGrid = {};
        this.tempGrid = {};
        for (var i = 0; i < this.size; i++) {
            this.lifeGrid[i] = {};
            this.tempGrid[i] = {};
            for (var j = 0; j < this.size; j++) {
                this.lifeGrid[i][j] = 0;
                this.tempGrid[i][j] = 0;
            }
        }
    };
    LifeGrid.prototype.applyConfigurationToLifeGrid = function (textConfiguration) {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.lifeGrid[i][j] = textConfiguration[i][j] === '#';
            }
        }
    };
    LifeGrid.prototype.printGrid = function (grid) {
        var output = '';
        for (var i = 0; i < this.size; i++) {
            var outputRow = '';
            for (var j = 0; j < this.size; j++) {
                outputRow += grid[i][j] ? '#' : ' ';
            }
            output += outputRow + '\n';
        }
        wait(300);
        console.clear();
        console.log(output);
    };
    return LifeGrid;
}());
exports.LifeGrid = LifeGrid;
