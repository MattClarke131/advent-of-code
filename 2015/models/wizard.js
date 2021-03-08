"use strict";
exports.__esModule = true;
exports.Wizard = void 0;
var Wizard = /** @class */ (function () {
    function Wizard(hp, mana, boss) {
        this.boss = boss;
        this.hp = hp;
        this.mana = mana;
        this.manaSpent = 0;
        this.shieldTurns = 0;
        this.poisonTurns = 0;
        this.rechargeTurns = 0;
        this.actions = [];
    }
    Wizard.prototype.clone = function () {
        var bossClone = { hp: this.boss.hp, damage: this.boss.damage };
        var clone = new Wizard(this.hp, this.mana, bossClone);
        clone.shieldTurns = this.shieldTurns;
        clone.poisonTurns = this.poisonTurns;
        clone.rechargeTurns = this.rechargeTurns;
        clone.manaSpent = this.manaSpent;
        clone.actions = this.actions;
        return clone;
    };
    Wizard.prototype.getFutureWizards = function (maximumManaSpent) {
        var _this = this;
        if (this.getBattleStatus() !== Wizard.STATUS_BATTLING) {
            return [];
        }
        var possibleActions = this.getPossibleActions();
        var futureWizards = [];
        possibleActions.forEach(function (action) {
            var futureWizard = _this.clone();
            futureWizard.performAction(action);
            futureWizards.push(futureWizard);
        });
        if (maximumManaSpent !== null) {
            var validWizards = futureWizards.filter(function (wizard) { return wizard.manaSpent < maximumManaSpent; });
            //return shuffleArray(validWizards)
            return (validWizards);
        }
        else {
            //return shuffleArray(futureWizards)
            return (futureWizards);
        }
    };
    Wizard.prototype.getBattleStatus = function () {
        if (this.hp < 0) {
            return Wizard.STATUS_DEFEATED;
        }
        else if (this.boss.hp < 0) {
            return Wizard.STATUS_VICTORIOUS;
        }
        else {
            return Wizard.STATUS_BATTLING;
        }
    };
    Wizard.prototype.beginWizardTurn = function () {
        this.applyEffects();
        this.decreaseEffectTurns();
    };
    Wizard.prototype.beginBossTurn = function () {
        this.applyEffects();
        this.decreaseEffectTurns();
    };
    Wizard.prototype.bossAttack = function () {
        var playerShield = this.shieldTurns > 0 ? Wizard.SHIELD_AMOUNT : 0;
        this.hp -= Math.max(this.boss.damage - playerShield, 1);
    };
    Wizard.prototype.getPossibleActions = function () {
        var possibleActions = [];
        if (this.mana >= Wizard.MAGIC_MISSILE_COST) {
            possibleActions.push('magic_missile');
        }
        if (this.mana >= Wizard.DRAIN_COST) {
            possibleActions.push('drain');
        }
        if (this.mana >= Wizard.SHIELD_COST && this.shieldTurns === 0) {
            possibleActions.push('shield');
        }
        if (this.mana >= Wizard.POISON_COST && this.poisonTurns === 0) {
            possibleActions.push('poison');
        }
        if (this.mana >= Wizard.RECHARGE_COST && this.rechargeTurns === 0) {
            possibleActions.push('recharge');
        }
        return possibleActions;
    };
    Wizard.prototype.performAction = function (actionString) {
        switch (actionString) {
            case 'magic_missile': {
                this.magicMissile();
                break;
            }
            case 'drain': {
                this.drain();
                break;
            }
            case 'shield': {
                this.shield();
                break;
            }
            case 'poison': {
                this.poison();
                break;
            }
            case 'recharge': {
                this.recharge();
                break;
            }
            default: {
                throw ("invalid action given: " + actionString);
            }
        }
        this.actions.push(actionString);
    };
    Wizard.prototype.applyEffects = function () {
        if (this.poisonTurns > 0) {
            this.boss.hp -= Wizard.POISON_DAMAGE;
        }
        if (this.rechargeTurns > 0) {
            this.mana += Wizard.RECHARGE_AMOUNT;
        }
    };
    Wizard.prototype.decreaseEffectTurns = function () {
        this.shieldTurns = Math.max(this.shieldTurns - 1, 0);
        this.poisonTurns = Math.max(this.poisonTurns - 1, 0);
        this.rechargeTurns = Math.max(this.rechargeTurns - 1, 0);
    };
    Wizard.prototype.magicMissile = function () {
        if (this.mana < Wizard.MAGIC_MISSILE_COST) {
            throw ('Insufficient mana to cast magic missile');
        }
        else {
            this.mana -= Wizard.MAGIC_MISSILE_COST;
            this.manaSpent += Wizard.MAGIC_MISSILE_COST;
            this.boss.hp -= Wizard.MAGIC_MISSILE_DAMAGE;
        }
    };
    Wizard.prototype.drain = function () {
        if (this.mana < Wizard.DRAIN_COST) {
            throw ('Insufficient mana to cast drain');
        }
        else {
            this.mana -= Wizard.DRAIN_COST;
            this.manaSpent += Wizard.DRAIN_COST;
            this.boss.hp -= Wizard.DRAIN_DAMAGE;
            this.hp += Wizard.DRAIN_HEAL;
        }
    };
    Wizard.prototype.shield = function () {
        if (this.mana < Wizard.SHIELD_COST) {
            throw ('Insufficient mana to cast shield');
        }
        else if (this.shieldTurns > 0) {
            throw ('Cannot stack shield effect');
        }
        else {
            this.mana -= Wizard.SHIELD_COST;
            this.manaSpent += Wizard.SHIELD_COST;
            this.shieldTurns += Wizard.SHIELD_TURNS;
        }
    };
    Wizard.prototype.poison = function () {
        if (this.mana < Wizard.POISON_COST) {
            throw ('Insufficient mana to cast poison');
        }
        else if (this.poisonTurns > 0) {
            throw ('Cannot stack poison effect');
        }
        else {
            this.mana -= Wizard.POISON_COST;
            this.manaSpent += Wizard.POISON_COST;
            this.poisonTurns += Wizard.POISON_TURNS;
        }
    };
    Wizard.prototype.recharge = function () {
        if (this.mana < Wizard.RECHARGE_COST) {
            throw ('Insufficient mana to cast recharge');
        }
        else if (this.rechargeTurns > 0) {
            throw ('Cannot stack recharge effect');
        }
        else {
            this.mana -= Wizard.RECHARGE_COST;
            this.manaSpent += Wizard.RECHARGE_COST;
            this.rechargeTurns += Wizard.RECHARGE_TURNS;
        }
    };
    Wizard.STATUS_BATTLING = 1;
    Wizard.STATUS_VICTORIOUS = 2;
    Wizard.STATUS_DEFEATED = 3;
    Wizard.MAGIC_MISSILE_COST = 53;
    Wizard.MAGIC_MISSILE_DAMAGE = 4;
    Wizard.DRAIN_COST = 73;
    Wizard.DRAIN_DAMAGE = 2;
    Wizard.DRAIN_HEAL = 2;
    Wizard.SHIELD_COST = 113;
    Wizard.SHIELD_TURNS = 6;
    Wizard.SHIELD_AMOUNT = 7;
    Wizard.POISON_COST = 173;
    Wizard.POISON_TURNS = 6;
    Wizard.POISON_DAMAGE = 3;
    Wizard.RECHARGE_COST = 229;
    Wizard.RECHARGE_TURNS = 5;
    Wizard.RECHARGE_AMOUNT = 101;
    return Wizard;
}());
exports.Wizard = Wizard;
var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
