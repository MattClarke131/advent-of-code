"use strict";
exports.__esModule = true;
var cookie_1 = require("./cookie");
var butterscotch = new cookie_1.CookieIngredient('Butterscotch', -1, -2, 6, 3, 8);
var cinnamon = new cookie_1.CookieIngredient('Cinnamon', 2, 3, -2, -1, 3);
describe('Cookie', function () {
    describe('calculateScore()', function () {
        test('44 butterscoth and 56 cinnamon should have a score of 62842880', function () {
            var ingredients = [
                { ingredient: butterscotch, amount: 44 },
                { ingredient: cinnamon, amount: 56 },
            ];
            var cookie = new cookie_1.Cookie(ingredients);
            var actual = cookie.calculateScore();
            var expected = 62842880;
            expect(actual).toBe(expected);
        });
    });
});
describe('CookieIngredient', function () {
    describe('static fromString(inputString)', function () {
        test('fromString should create the correct ingredient', function () {
            var inputString = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8';
            var ingredient = cookie_1.CookieIngredient.fromString(inputString);
            expect(ingredient).toStrictEqual(butterscotch);
        });
    });
});
describe('OptimalCookieGenerator', function () {
    describe('static fromString(instructions)', function () {
        test('fromString should create the correct generator', function () {
            var instructions = [
                'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
                'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
            ];
            var actual = cookie_1.OptimalCookieGenerator.fromString(instructions);
            var expected = new cookie_1.OptimalCookieGenerator([butterscotch, cinnamon]);
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('getOptimalCookie()', function () {
        test('two ingredients should return 62842880', function () {
            var optimalCookieGenerator = new cookie_1.OptimalCookieGenerator([butterscotch, cinnamon]);
            var highScore = optimalCookieGenerator.getOptimalCookieScore();
            var expected = 62842880;
            expect(highScore).toBe(expected);
        });
    });
    describe('getOptimalCookieScoreWithNCalories()', function () {
        test('two ingredients should return 57600000', function () {
            var optimalCookieGenerator = new cookie_1.OptimalCookieGenerator([butterscotch, cinnamon]);
            var highScore = optimalCookieGenerator.getOptimalCookieScoreWithNCalories(500);
            var expected = 57600000;
            expect(highScore).toBe(expected);
        });
    });
});
