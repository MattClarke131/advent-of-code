"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
//const pathName: string = path.join(__dirname, './input.txt');
//const inputString: string = fs.readFileSync(pathName, 'utf-8');
//const dimensionsArray = inputString.split('\n')
var FileParser = /** @class */ (function () {
    function FileParser(inputPath) {
        this.inputPath = inputPath;
        var absolutePath = path.join(__dirname, inputPath);
        this.inputString = fs.readFileSync(absolutePath, 'utf-8');
    }
    FileParser.prototype.getArrayFromSingleLine = function () {
        return this.inputString.split(', ').map(function (el) { return el.trim(); });
    };
    FileParser.prototype.getArrayFromMultiLine = function () {
        return this.inputString
            .split('\n')
            .map(function (el) { return el.trim(); })
            .filter(function (el) { return el !== ''; });
    };
    return FileParser;
}());
exports["default"] = FileParser;
