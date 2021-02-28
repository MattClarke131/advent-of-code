"use strict";
exports.__esModule = true;
exports.AuntSue = void 0;
var AuntSue = /** @class */ (function () {
    function AuntSue(rawInput) {
        var words = rawInput.split(' ');
        this.sueNumber = parseInt(words[1].substring(0, words[1].length - 1));
        this.rememberedThings = this.generateRememberedThings(rawInput);
    }
    AuntSue.prototype.generateRememberedThings = function (rawInput) {
        var words = rawInput.split(' ').slice(2);
        var rememberedThings = {};
        for (var i = 0; i < words.length - 1; i += 2) {
            var key = words[i].substring(0, words[i].length - 1);
            var value = void 0;
            if (words[i + 1].length === 1) {
                value = parseInt(words[i + 1]);
            }
            else {
                value = parseInt(words[i + 1].substring(0, words[i + 1].length - 1));
            }
            rememberedThings[key] = value;
        }
        return rememberedThings;
    };
    AuntSue.prototype.matchesAnalysis = function (ticker) {
        var thingKeys = Object.keys(this.rememberedThings);
        for (var i = 0; i < thingKeys.length; i++) {
            var rememberedThing = thingKeys[i];
            if (ticker[rememberedThing] !== this.rememberedThings[rememberedThing]) {
                return false;
            }
        }
        return true;
    };
    return AuntSue;
}());
exports.AuntSue = AuntSue;
