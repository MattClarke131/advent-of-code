"use strict";
exports.__esModule = true;
var rpgBattle_1 = require("./rpgBattle");
describe('RPGBattle', function () {
    describe('doesPlayerWin()', function () {
        test('player wins', function () {
            var playerStats = {
                hp: 8,
                damage: 5,
                armor: 5
            };
            var bossStats = {
                hp: 12,
                damage: 7,
                armor: 2
            };
            var rpgBattle = rpgBattle_1.RPGBattle.fromFighterData(playerStats, bossStats);
            var actual = rpgBattle.doesPlayerWin();
            var expected = true;
            expect(actual).toBe(expected);
        });
    });
});
