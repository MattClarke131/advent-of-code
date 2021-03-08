"use strict";
exports.__esModule = true;
var lightGrid_1 = require("./lightGrid");
describe('LightGrid', function () {
    describe.skip('countOnLights', function () {
        test('empty instructions should return 0', function () {
            var instructions = [];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(0);
        });
        test('turn on 0,0 through 1,1 should return 4', function () {
            var instructions = [
                'turn on 0,0 through 1,1'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(4);
        });
        test('turn on and off', function () {
            var instructions = [
                'turn on 0,0 through 1,1',
                'turn off 0,0 through 1,0'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(2);
        });
        test('turn on and toggle', function () {
            var instructions = [
                'turn on 0,0 through 1,1',
                'toggle 1,1 through 2,2'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(6);
        });
    });
    describe('countOnLights part b', function () {
        test('empty instructions should return 0', function () {
            var instructions = [];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(0);
        });
        test('turn on 0,0 through 1,1 should return 4', function () {
            var instructions = [
                'turn on 0,0 through 1,1'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(4);
        });
        test('turn on and off', function () {
            var instructions = [
                'turn on 0,0 through 1,1',
                'turn off 0,0 through 1,0'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(2);
        });
        test('turn on and toggle', function () {
            var instructions = [
                'turn on 0,0 through 1,1',
                'toggle 1,1 through 2,2'
            ];
            var lightGrid = new lightGrid_1.LightGrid(instructions, 3);
            expect(lightGrid.countOnLights()).toBe(12);
        });
    });
});
