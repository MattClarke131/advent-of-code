"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ItemShop = exports.Fighter = exports.RPGBattle = void 0;
var RPGBattle = /** @class */ (function () {
    function RPGBattle(player, boss) {
        this.player = player;
        this.boss = boss;
    }
    RPGBattle.fromFighterData = function (playerData, bossData) {
        var player = new Fighter(playerData);
        var boss = new Fighter(bossData);
        return new RPGBattle(player, boss);
    };
    RPGBattle.prototype.doesPlayerWin = function () {
        while (this.player.hp > 0 && this.boss.hp > 0) {
            // players turn
            this.boss.hp -= Math.max(1, this.player.getDamage() - this.boss.getArmor());
            if (this.boss.hp <= 0) {
                return true;
            }
            // boss's turn
            this.player.hp -= Math.max(1, this.boss.getDamage() - this.player.getArmor());
            if (this.player.hp <= 0) {
                return false;
            }
        }
    };
    return RPGBattle;
}());
exports.RPGBattle = RPGBattle;
var Fighter = /** @class */ (function () {
    function Fighter(fighterData) {
        if (fighterData === void 0) { fighterData = null; }
        var _a, _b, _c, _d;
        this.rings = [];
        this.hp = (_a = fighterData === null || fighterData === void 0 ? void 0 : fighterData.hp) !== null && _a !== void 0 ? _a : 0;
        this.baseHp = (_b = fighterData === null || fighterData === void 0 ? void 0 : fighterData.hp) !== null && _b !== void 0 ? _b : 0;
        this.baseDamage = (_c = fighterData === null || fighterData === void 0 ? void 0 : fighterData.damage) !== null && _c !== void 0 ? _c : 0;
        this.baseArmor = (_d = fighterData === null || fighterData === void 0 ? void 0 : fighterData.armor) !== null && _d !== void 0 ? _d : 0;
    }
    Fighter.prototype.getDamage = function () {
        var _a, _b, _c, _d;
        return (this.baseDamage
            + ((_b = (_a = this.weapon) === null || _a === void 0 ? void 0 : _a.damage) !== null && _b !== void 0 ? _b : 0)
            + ((_d = (_c = this.armor) === null || _c === void 0 ? void 0 : _c.damage) !== null && _d !== void 0 ? _d : 0)
            + (this.rings ? this.rings.reduce(function (memo, ring) { return memo + ring.damage; }, 0) : 0));
    };
    Fighter.prototype.getArmor = function () {
        var _a, _b, _c, _d;
        return (this.baseArmor
            + ((_b = (_a = this.weapon) === null || _a === void 0 ? void 0 : _a.armor) !== null && _b !== void 0 ? _b : 0)
            + ((_d = (_c = this.armor) === null || _c === void 0 ? void 0 : _c.armor) !== null && _d !== void 0 ? _d : 0)
            + (this.rings ? this.rings.reduce(function (memo, ring) { return memo + ring.armor; }, 0) : 0));
    };
    Fighter.prototype.getCost = function () {
        return (this.weapon.cost
            + this.armor.cost
            + this.rings.reduce(function (memo, ring) { return memo + ring.cost; }, 0));
    };
    Fighter.prototype.equip = function (item) {
        switch (item.itemType) {
            case 'Weapon': {
                this.weapon = item;
                break;
            }
            case 'Armor': {
                this.armor = item;
                break;
            }
            case 'Ring': {
                this.rings.push(item);
                break;
            }
        }
    };
    return Fighter;
}());
exports.Fighter = Fighter;
var Item = /** @class */ (function () {
    function Item(name, cost, damage, armor) {
        this.name = name;
        this.cost = cost;
        this.damage = damage;
        this.armor = armor;
    }
    return Item;
}());
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, cost, damage, armor) {
        var _this = _super.call(this, name, cost, damage, armor) || this;
        _this.itemType = 'Weapon';
        return _this;
    }
    return Weapon;
}(Item));
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(name, cost, damage, armor) {
        var _this = _super.call(this, name, cost, damage, armor) || this;
        _this.itemType = 'Armor';
        return _this;
    }
    return Armor;
}(Item));
var Ring = /** @class */ (function (_super) {
    __extends(Ring, _super);
    function Ring(name, cost, damage, armor) {
        var _this = _super.call(this, name, cost, damage, armor) || this;
        _this.itemType = 'Ring';
        return _this;
    }
    return Ring;
}(Item));
var ItemShop = /** @class */ (function () {
    function ItemShop(weapons, armors, rings) {
        this.weapons = weapons;
        this.armors = armors.concat(new Armor('null', 0, 0, 0));
        this.rings = rings.concat(new Ring('null', 0, 0, 0));
    }
    ItemShop.fromString = function (inputString) {
        var sectionStrings = inputString.split('\n\n');
        var weapons = this.getSectionFromString(sectionStrings[0], Weapon);
        var armors = this.getSectionFromString(sectionStrings[1], Armor);
        var rings = this.getSectionFromString(sectionStrings[2], Ring);
        return new ItemShop(weapons, armors, rings);
    };
    ItemShop.getSectionFromString = function (sectionString, classType) {
        var rows = sectionString.split('\n');
        var itemStrings = rows.slice(1).map(function (i) { return i.replace(/\s+/g, ' ').split(' '); });
        var items = itemStrings.map(function (i) {
            if (i[1][0] === '+') {
                return new classType(i[0] + ' ' + i[1], parseInt(i[2]), parseInt(i[3]), parseInt(i[4]));
            }
            else {
                return new classType(i[0], parseInt(i[1]), parseInt(i[2]), parseInt(i[3]));
            }
        });
        return items;
    };
    ItemShop.prototype.getLoadouts = function () {
        var nullRing = this.rings.filter(function (ring) { return ring.name === 'null'; })[0];
        var loadouts = [];
        for (var i = 0; i < this.armors.length; i++) {
            for (var j = 0; j < this.weapons.length; j++) {
                for (var k = 0; k < this.rings.length; k++) {
                    for (var l = k + 1; l < this.rings.length; l++) {
                        loadouts.push({
                            armor: this.armors[i],
                            weapon: this.weapons[j],
                            ring1: this.rings[k],
                            ring2: this.rings[l]
                        });
                    }
                }
                loadouts.push({
                    armor: this.armors[i],
                    weapon: this.weapons[j],
                    ring1: nullRing,
                    ring2: nullRing
                });
            }
        }
        return loadouts;
    };
    return ItemShop;
}());
exports.ItemShop = ItemShop;
