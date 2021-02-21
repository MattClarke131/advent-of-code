"use strict";
exports.__esModule = true;
exports.RouteCalculator = void 0;
var LocationDistance = /** @class */ (function () {
    function LocationDistance(locationDistanceString) {
        var words = locationDistanceString.split(' ');
        this.startingLocation = words[0];
        this.endingLocation = words[2];
        this.distance = parseInt(words[4]);
    }
    return LocationDistance;
}());
var RouteCalculator = /** @class */ (function () {
    function RouteCalculator(rawDistancesArray) {
        this.distances = rawDistancesArray.map(function (d) { return new LocationDistance(d); });
        this.locations = this.getLocations();
    }
    RouteCalculator.prototype.getLocations = function () {
        var sources = this.distances.map(function (d) { return d.startingLocation; });
        var destinations = this.distances.map(function (d) { return d.endingLocation; });
        var locations = sources.concat(destinations);
        var uniqueLocations = locations.filter(function (l, i, a) { return a.indexOf(l) === i; });
        return uniqueLocations;
    };
    RouteCalculator.prototype.calculateShortestRoute = function () {
        var _this = this;
        var locationPermutations = this.getPermutations(this.locations);
        var distances = locationPermutations.map(function (l) { return _this.getDistanceFromLocations(l); });
        return Math.min.apply(Math, distances);
    };
    RouteCalculator.prototype.calculateLongestRoute = function () {
        var _this = this;
        var locationPermutations = this.getPermutations(this.locations);
        var distances = locationPermutations.map(function (l) { return _this.getDistanceFromLocations(l); });
        return Math.max.apply(Math, distances);
    };
    RouteCalculator.prototype.getPermutations = function (inputArray) {
        var permutation = inputArray.map(function (x) { return x; }), length = permutation.length, result = [permutation.slice()], c = new Array(length).fill(0), i = 1, k, p;
        while (i < length) {
            if (c[i] < i) {
                k = i % 2 && c[i];
                p = permutation[i];
                permutation[i] = permutation[k];
                permutation[k] = p;
                c[i]++;
                i = 1;
                result.push(permutation.slice());
            }
            else {
                c[i] = 0;
                i++;
            }
        }
        return result;
    };
    RouteCalculator.prototype.getDistanceFromLocations = function (locations) {
        var total = 0;
        for (var i = 0; i < locations.length - 1; i++) {
            total += this.getDistance(locations[i], locations[i + 1]);
        }
        return total;
    };
    RouteCalculator.prototype.getDistance = function (start, end) {
        for (var i = 0; i < this.distances.length; i++) {
            if ((this.distances[i].startingLocation === start
                && this.distances[i].endingLocation === end)
                || (this.distances[i].startingLocation === end
                    && this.distances[i].endingLocation === start)) {
                return this.distances[i].distance;
            }
        }
        throw ('distance not found');
    };
    return RouteCalculator;
}());
exports.RouteCalculator = RouteCalculator;
