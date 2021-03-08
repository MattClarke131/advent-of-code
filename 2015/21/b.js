"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var rpgBattle_1 = require("../models/rpgBattle");
var pathName = path.join(__dirname, './input.txt');
var inputString = fs.readFileSync(pathName, 'utf-8');
inputString = inputString.substring(0, inputString.length - 1);
var bossData = { hp: 103, damage: 9, armor: 2 };
var itemShop = rpgBattle_1.ItemShop.fromString(inputString);
var getRingPairs = function (rings) {
    var nullRing = rings.filter(function (ring) { return ring.name === 'null'; });
    var pairs = [];
    pairs.push([nullRing, nullRing]);
    for (var i = 0; i < rings.length; i++) {
        for (var j = i + 1; j < rings.length; j++) {
            pairs.push([rings[i], rings[j]]);
        }
    }
    return pairs;
};
var getLeastEfficientLoadoutCost = function (bossData, itemShop) {
    var worst = 0;
    var loadouts = itemShop.getLoadouts();
    var i = 0;
    while (i < loadouts.length) {
        var loadout = loadouts[i];
        var loadoutCost = (loadout['armor']['cost']
            + loadout['weapon']['cost']
            + loadout['ring1']['cost']
            + loadout['ring2']['cost']);
        if (loadoutCost > worst) {
            var player = new rpgBattle_1.Fighter();
            player.hp = 100;
            player.equip(loadout['armor']);
            player.equip(loadout['weapon']);
            player.equip(loadout['ring1']);
            player.equip(loadout['ring2']);
            var boss = new rpgBattle_1.Fighter(bossData);
            var rpgBattle = new rpgBattle_1.RPGBattle(player, boss);
            if (!rpgBattle.doesPlayerWin()) {
                worst = loadoutCost;
            }
        }
        i++;
    }
    return worst;
};
console.log(getLeastEfficientLoadoutCost(bossData, itemShop));
