"use strict";
exports.__esModule = true;
exports.OptimalCookieGenerator = exports.CookieIngredient = exports.Cookie = void 0;
var Cookie = /** @class */ (function () {
    function Cookie(ingredients) {
        this.ingredients = ingredients;
    }
    Cookie.prototype.calculateScore = function () {
        var scores = [
            this.getPropertyScore('capacity'),
            this.getPropertyScore('durability'),
            this.getPropertyScore('flavor'),
            this.getPropertyScore('texture'),
        ];
        scores = scores.map(function (score) { return Math.max(0, score); });
        return scores.reduce(function (total, score) { return total * score; });
    };
    Cookie.prototype.getPropertyScore = function (property) {
        return this.ingredients.reduce(function (total, ingredient) {
            return total + ingredient.amount * ingredient.ingredient[property];
        }, 0);
    };
    return Cookie;
}());
exports.Cookie = Cookie;
var CookieIngredient = /** @class */ (function () {
    function CookieIngredient(name, capacity, durability, flavor, texture, calories) {
        this.name = name;
        this.capacity = capacity;
        this.durability = durability;
        this.flavor = flavor;
        this.texture = texture;
        this.calories = calories;
    }
    CookieIngredient.fromString = function (inputString) {
        var words = inputString.split(' ');
        return new CookieIngredient(words[0].substring(0, words[0].length - 1), parseInt(words[2]), parseInt(words[4]), parseInt(words[6]), parseInt(words[8]), parseInt(words[10]));
    };
    return CookieIngredient;
}());
exports.CookieIngredient = CookieIngredient;
var OptimalCookieGenerator = /** @class */ (function () {
    function OptimalCookieGenerator(ingredients) {
        this.ingredients = ingredients;
        this.highScore = 0;
    }
    OptimalCookieGenerator.fromString = function (instructions) {
        var ingredients = instructions.map(function (instruction) { return CookieIngredient.fromString(instruction); });
        return new OptimalCookieGenerator(ingredients);
    };
    OptimalCookieGenerator.prototype.getOptimalCookieScore = function () {
        var amountsPermutation = this.ingredients.map(function (i) { return 0; });
        amountsPermutation[0] = 100;
        this.highScore = this.getCookieScoreFromAmountsPermutation(amountsPermutation);
        var nextPermutation = this.getNextPermutation(amountsPermutation);
        var checked = 1;
        while (!this.arraysEqual(amountsPermutation, nextPermutation)) {
            this.highScore =
                Math.max(this.highScore, this.getCookieScoreFromAmountsPermutation(nextPermutation));
            amountsPermutation = nextPermutation;
            nextPermutation = this.getNextPermutation(amountsPermutation);
            checked++;
        }
        return this.highScore;
    };
    OptimalCookieGenerator.prototype.getCookieScoreFromAmountsPermutation = function (amountsPermutation) {
        var _this = this;
        var ingredients = amountsPermutation.map(function (amount, i) {
            return { ingredient: _this.ingredients[i], amount: amount };
        });
        var cookie = new Cookie(ingredients);
        return cookie.calculateScore();
    };
    OptimalCookieGenerator.prototype.getNextPermutation = function (permutation) {
        if (permutation[permutation.length - 1] === 100) {
            return permutation;
        }
        else if (permutation.length === 2) {
            if (permutation[0] === 0) {
                return permutation;
            }
            else {
                return [permutation[0] - 1, permutation[1] + 1];
            }
        }
        else {
            var subPermutation = permutation.slice(1);
            var nextSubPermutation = this.getNextPermutation(subPermutation);
            if (!this.arraysEqual(subPermutation, nextSubPermutation)) {
                return [permutation[0]].concat(nextSubPermutation);
            }
            else {
                if (permutation[0] === 0) {
                    return permutation;
                }
                else {
                    var nextPermutation = permutation.map(function (p) { return 0; });
                    nextPermutation[0] = permutation[0] - 1;
                    nextPermutation[1] = subPermutation.reduce(function (total, perm) { return total + perm; }, 1);
                    return nextPermutation;
                }
            }
        }
    };
    OptimalCookieGenerator.prototype.arraysEqual = function (a, b) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    };
    return OptimalCookieGenerator;
}());
exports.OptimalCookieGenerator = OptimalCookieGenerator;
