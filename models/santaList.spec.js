"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var santaList_1 = require("./santaList");
var pathName = path.join(__dirname, '../08/testinput.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
var formattedInputString = inputString.slice(0, inputString.length - 1);
var testList = formattedInputString.split('\n');
describe('SantaList', function () {
    describe('getDiff', function () {
        test('should return 12', function () {
            // given
            var santaList = new santaList_1.SantaList(testList);
            //then
            var actual = santaList.getDiff();
            var expected = 12;
            expect(actual).toBe(expected);
        });
    });
});
