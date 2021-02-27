"use strict";
exports.__esModule = true;
var reindeer_1 = require("./reindeer");
var comet = new reindeer_1.Reindeer('Comet', 14, 10, 127);
var dancer = new reindeer_1.Reindeer('Dancer', 16, 11, 162);
describe('Reindeer', function () {
    describe('getDistanceTravelled(timeInSeconds', function () {
        describe('Comet', function () {
            test('travels 14km in 1 second', function () {
                var distance = comet.getDistanceTravelled(1);
                var expectedDistance = 14;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 140km in 10 second', function () {
                var distance = comet.getDistanceTravelled(10);
                var expectedDistance = 140;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 140km in 11 second', function () {
                var distance = comet.getDistanceTravelled(11);
                var expectedDistance = 140;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 140km in 12 second', function () {
                var distance = comet.getDistanceTravelled(12);
                var expectedDistance = 140;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 1120 in 1000 second', function () {
                var distance = comet.getDistanceTravelled(1000);
                var expectedDistance = 1120;
                expect(distance).toBe(expectedDistance);
            });
        });
        describe('Dancer', function () {
            test('travels 16km in 1 second', function () {
                var distance = dancer.getDistanceTravelled(1);
                var expectedDistance = 16;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 160km in 10 second', function () {
                var distance = dancer.getDistanceTravelled(10);
                var expectedDistance = 160;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 176km in 11 second', function () {
                var distance = dancer.getDistanceTravelled(11);
                var expectedDistance = 176;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 176 in 12 second', function () {
                var distance = dancer.getDistanceTravelled(12);
                var expectedDistance = 176;
                expect(distance).toBe(expectedDistance);
            });
            test('travels 1056 in 1000 second', function () {
                var distance = dancer.getDistanceTravelled(1000);
                var expectedDistance = 1056;
                expect(distance).toBe(expectedDistance);
            });
        });
    });
    describe('static fromString(inputString)', function () {
        test('Comet string should have correct properties', function () {
            var cometString = 'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.';
            var comet = reindeer_1.Reindeer.fromString(cometString);
            var expected = new reindeer_1.Reindeer('Comet', 14, 10, 127);
            expect(comet).toStrictEqual(expected);
        });
        test('Dancer string should have correct properties', function () {
            var dancerString = 'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.';
            var dancer = reindeer_1.Reindeer.fromString(dancerString);
            var expected = new reindeer_1.Reindeer('Dancer', 16, 11, 162);
            expect(dancer).toStrictEqual(expected);
        });
    });
});
