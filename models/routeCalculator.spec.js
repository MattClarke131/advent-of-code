"use strict";
exports.__esModule = true;
var routeCalculator_1 = require("./routeCalculator");
describe('RouteCalculator', function () {
    describe('calculateShortedRoute', function () {
        test('shortest distance should be 605', function () {
            var rawDistancesArray = [
                'London to Dublin = 464',
                'London to Belfast = 518',
                'Dublin to Belfast = 141',
            ];
            var routeCalculator = new routeCalculator_1.RouteCalculator(rawDistancesArray);
            var actual = routeCalculator.calculateShortestRoute();
            expect(actual).toBe(605);
        });
    });
});
