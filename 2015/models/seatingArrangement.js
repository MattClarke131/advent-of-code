"use strict";
exports.__esModule = true;
exports.SeatingArrangement = void 0;
var SeatingArrangement = /** @class */ (function () {
    function SeatingArrangement(happinessRules) {
        this.happinessRules = happinessRules;
        this.generateAttendees();
        this.populateAttendeesHappinessRules();
    }
    SeatingArrangement.prototype.generateAttendees = function () {
        var _this = this;
        this.attendees = {};
        this.happinessRules.forEach(function (rule) {
            var _a;
            var _b;
            var name = rule.split(' ')[0];
            var id = Object.keys(_this.attendees).length;
            (_a = (_b = _this.attendees)[name]) !== null && _a !== void 0 ? _a : (_b[name] = new Attendee(name, id));
        });
    };
    SeatingArrangement.prototype.populateAttendeesHappinessRules = function () {
        var _this = this;
        this.happinessRules.forEach(function (rule) {
            var words = rule.split(' ');
            var subjectName = words[0];
            var polarity = words[2] === 'gain' ? 1 : -1;
            var magnitude = parseInt(words[3]);
            var targetName = words[10].slice(0, -1);
            _this.attendees[subjectName].addHappinessRule(targetName, polarity * magnitude);
        });
    };
    SeatingArrangement.prototype.getOptimalArrangementValueWithSanta = function () {
        var _this = this;
        var attendeesArray = Object.keys(this.attendees).map(function (key) { return _this.attendees[key]; });
        var sortedAttendeesArray = attendeesArray.sort(function (a, b) { return a.id - b.id; });
        // initial state
        var attendeesPermutation = sortedAttendeesArray.map(function (attendee) { return { attendee: attendee, value: attendee.id, direction: -1 }; });
        var currentMax = 0;
        while (attendeesPermutation !== null) {
            currentMax = Math.max(currentMax, this.calcSantaArrangementValue(attendeesPermutation));
            attendeesPermutation = this.getNextAttendeesPermutation(attendeesPermutation);
        }
        return currentMax;
    };
    SeatingArrangement.prototype.calcSantaArrangementValue = function (permutation) {
        var total = 0;
        for (var i = 1; i < permutation.length; i++) {
            total += this.getHappiness(permutation[i - 1], permutation[i]);
        }
        return total;
    };
    SeatingArrangement.prototype.getOptimalArrangementValue = function () {
        var _this = this;
        var attendeesArray = Object.keys(this.attendees).map(function (key) { return _this.attendees[key]; });
        var sortedAttendeesArray = attendeesArray.sort(function (a, b) { return a.id - b.id; });
        var headOfTable = sortedAttendeesArray[0];
        // initial state
        var attendeesPermutation = sortedAttendeesArray.slice(1)
            .map(function (attendee) { return { attendee: attendee, value: attendee.id, direction: -1 }; });
        var currentMax = 0;
        while (attendeesPermutation !== null) {
            currentMax = Math.max(currentMax, this.calcArrangementValue(headOfTable, attendeesPermutation));
            attendeesPermutation = this.getNextAttendeesPermutation(attendeesPermutation);
        }
        return currentMax;
    };
    SeatingArrangement.prototype.calcArrangementValue = function (headOfTable, permutation) {
        var completeTable = permutation.concat({ attendee: headOfTable });
        var total = 0;
        for (var i = 1; i < completeTable.length; i++) {
            total += this.getHappiness(completeTable[i - 1], completeTable[i]);
        }
        var firstPerson = completeTable[0];
        var lastPerson = completeTable[completeTable.length - 1];
        total += this.getHappiness(firstPerson, lastPerson);
        return total;
    };
    SeatingArrangement.prototype.getHappiness = function (a, b) {
        return (a.attendee.happinessRules[b.attendee.name]
            + b.attendee.happinessRules[a.attendee.name]);
    };
    SeatingArrangement.prototype.factorial = function (n) {
        return n === 1 ? n : n * this.factorial(n - 1);
    };
    SeatingArrangement.prototype.getNextAttendeesPermutation = function (attendeesPermutation) {
        var mobileAttendees = this.getMobileAttendees(attendeesPermutation);
        if (mobileAttendees.length === 0) {
            return null;
        }
        var greatestMobileAttendee = this.getGreatestMobileAttendee(mobileAttendees);
        var greatestMobileAttendeeIndex = attendeesPermutation
            .findIndex(function (attendee) { return attendee.value === greatestMobileAttendee.value; });
        var targetIndex = greatestMobileAttendeeIndex + greatestMobileAttendee.direction;
        var nextPermutation = this.swap(attendeesPermutation, greatestMobileAttendeeIndex, targetIndex);
        nextPermutation.forEach(function (attendee) {
            attendee.direction *= attendee.value > greatestMobileAttendee.value ? -1 : 1;
        });
        return nextPermutation;
    };
    SeatingArrangement.prototype.getMobileAttendees = function (attendeesPermutation) {
        return attendeesPermutation.filter(function (attendee, index) {
            var checkIndex = index + attendee.direction;
            var checkAttendee = attendeesPermutation[checkIndex];
            return !!checkAttendee && attendee.value > checkAttendee.value;
        });
    };
    SeatingArrangement.prototype.getGreatestMobileAttendee = function (mobileAttendees) {
        var greatestMobileAttendee = mobileAttendees[0];
        mobileAttendees.forEach(function (attendee) {
            if (attendee.value > greatestMobileAttendee.value) {
                greatestMobileAttendee = attendee;
            }
        });
        return greatestMobileAttendee;
    };
    SeatingArrangement.prototype.swap = function (array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    };
    return SeatingArrangement;
}());
exports.SeatingArrangement = SeatingArrangement;
var Attendee = /** @class */ (function () {
    function Attendee(name, id) {
        this.name = name;
        this.id = id;
        this.happinessRules = {};
    }
    Attendee.prototype.addHappinessRule = function (name, happiness) {
        this.happinessRules[name] = happiness;
    };
    return Attendee;
}());
