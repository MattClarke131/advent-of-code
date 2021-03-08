"use strict";
exports.__esModule = true;
var lifeGrid_1 = require("./lifeGrid");
var initialState = [
    '.#.#.#',
    '...##.',
    '#....#',
    '..#...',
    '#.#..#',
    '####..',
];
var initialState2 = [
    '##.#.#',
    '...##.',
    '#....#',
    '..#...',
    '#.#..#',
    '####.#',
];
describe('LifeGrid', function () {
    describe('getLightsOnAfterSteps(n)', function () {
        describe('When corners are not locked', function () {
            test('0 steps returns 15', function () {
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState);
                var steps = 0;
                var expected = 15;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('1 steps returns 11', function () {
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState);
                var steps = 1;
                var expected = 11;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('2 steps returns 8', function () {
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState);
                var steps = 2;
                var expected = 8;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('3 steps returns 4', function () {
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState);
                var steps = 3;
                var expected = 4;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('4 steps returns 4', function () {
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState);
                var steps = 4;
                var expected = 4;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
        });
        describe('When corners are locked', function () {
            test('0 steps returns 17', function () {
                //given
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState2);
                //when
                lifeGrid.lockCorners();
                var steps = 0;
                //then
                var expected = 17;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('1 steps returns 18', function () {
                //given
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState2);
                //when
                lifeGrid.lockCorners();
                var steps = 1;
                //then
                var expected = 18;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('2 steps returns 18', function () {
                //given
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState2);
                //when
                lifeGrid.lockCorners();
                var steps = 2;
                //then
                var expected = 18;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('3 steps returns 18', function () {
                //given
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState2);
                //when
                lifeGrid.lockCorners();
                var steps = 3;
                //then
                var expected = 18;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
            test('4 steps returns 14', function () {
                //given
                var lifeGrid = new lifeGrid_1.LifeGrid(initialState2);
                //when
                lifeGrid.lockCorners();
                var steps = 4;
                //then
                var expected = 14;
                var actual = lifeGrid.getLightsOnAfterSteps(steps);
                expect(actual).toBe(expected);
            });
        });
    });
});
