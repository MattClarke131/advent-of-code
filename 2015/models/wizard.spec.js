"use strict";
exports.__esModule = true;
var wizard_1 = require("./wizard");
var BOSS_HP = 13;
var WIZARD_MANA = 2500;
var WIZARD_HP = 10;
describe('Wizard', function () {
    describe('getPossibleActions', function () {
        test('answer is empty array if not enough mana', function () {
            var mana = Math.min(wizard_1.Wizard.MAGIC_MISSILE_COST, wizard_1.Wizard.DRAIN_COST, wizard_1.Wizard.SHIELD_COST, wizard_1.Wizard.POISON_COST, wizard_1.Wizard.RECHARGE_COST) - 1;
            var boss = { hp: 10, damage: 8 };
            var wizard = new wizard_1.Wizard(10, mana, boss);
            var actual = wizard.getPossibleActions();
            var expected = [];
            expect(actual).toStrictEqual(expected);
        });
        test('answer is cheapest spell', function () {
            var mana = Math.min(wizard_1.Wizard.MAGIC_MISSILE_COST, wizard_1.Wizard.DRAIN_COST, wizard_1.Wizard.SHIELD_COST, wizard_1.Wizard.POISON_COST, wizard_1.Wizard.RECHARGE_COST) + 1;
            var boss = { hp: 10, damage: 8 };
            var wizard = new wizard_1.Wizard(10, mana, boss);
            var actual = wizard.getPossibleActions();
            var expected = ['magic_missile'];
            expect(actual).toStrictEqual(expected);
        });
        test('answer is two cheapest spells', function () {
            var mana = Math.max(wizard_1.Wizard.MAGIC_MISSILE_COST, wizard_1.Wizard.DRAIN_COST) + 1;
            var boss = { hp: 10, damage: 8 };
            var wizard = new wizard_1.Wizard(10, mana, boss);
            var actual = wizard.getPossibleActions();
            var expected = ['magic_missile', 'drain'];
            expect(actual).toStrictEqual(expected);
        });
    });
    describe('beginWizardTurn()', function () {
        test('effects all decrease', function () {
            //given
            var boss = { hp: BOSS_HP, damage: 8 };
            var wizard = new wizard_1.Wizard(10, WIZARD_MANA, boss);
            //when
            wizard.shield();
            wizard.poison();
            wizard.recharge();
            wizard.mana = WIZARD_MANA;
            wizard.beginWizardTurn();
            //then
            expect(wizard.shieldTurns).toBe(wizard_1.Wizard.SHIELD_TURNS - 1);
            expect(wizard.poisonTurns).toBe(wizard_1.Wizard.POISON_TURNS - 1);
            expect(boss.hp).toBe(BOSS_HP - wizard_1.Wizard.POISON_DAMAGE);
            expect(wizard.rechargeTurns).toBe(wizard_1.Wizard.RECHARGE_TURNS - 1);
            expect(wizard.mana).toBe(WIZARD_MANA + wizard_1.Wizard.RECHARGE_AMOUNT);
        });
    });
    describe('beginBossTurn()', function () {
        test('effects all decrease', function () {
            //given
            var boss = { hp: BOSS_HP, damage: 8 };
            var wizard = new wizard_1.Wizard(10, WIZARD_MANA, boss);
            //when
            wizard.shield();
            wizard.poison();
            wizard.recharge();
            wizard.mana = WIZARD_MANA;
            wizard.beginBossTurn();
            //then
            expect(wizard.shieldTurns).toBe(wizard_1.Wizard.SHIELD_TURNS - 1);
            expect(wizard.poisonTurns).toBe(wizard_1.Wizard.POISON_TURNS - 1);
            expect(boss.hp).toBe(BOSS_HP - wizard_1.Wizard.POISON_DAMAGE);
            expect(wizard.rechargeTurns).toBe(wizard_1.Wizard.RECHARGE_TURNS - 1);
            expect(wizard.mana).toBe(WIZARD_MANA + wizard_1.Wizard.RECHARGE_AMOUNT);
        });
    });
    describe('bossAttack()', function () {
        test('when wizard has no shield', function () {
            //given
            var boss = { hp: BOSS_HP, damage: 8 };
            var wizard = new wizard_1.Wizard(WIZARD_HP, WIZARD_MANA, boss);
            //when
            wizard.bossAttack();
            //then
            expect(wizard.hp).toBe(WIZARD_HP - wizard.boss.damage);
        });
        test('when wizard no shield', function () {
            //given
            var boss = { hp: BOSS_HP, damage: 8 };
            var wizard = new wizard_1.Wizard(10, WIZARD_MANA, boss);
            //when
            wizard.shieldTurns = 1;
            wizard.bossAttack();
            //then
            var expectedWizardHp = WIZARD_HP - wizard.boss.damage + wizard_1.Wizard.SHIELD_AMOUNT;
            expect(wizard.hp).toBe(expectedWizardHp);
        });
    });
    describe('getBattleStatus()', function () {
        test('both battlers are alive', function () {
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(10, 250, boss);
            var expected = wizard_1.Wizard.STATUS_BATTLING;
            var actual = wizard.getBattleStatus();
            expect(actual).toBe(expected);
        });
        test('wizard is alive, boss is dead', function () {
            var boss = { hp: -1, damage: 8 };
            var wizard = new wizard_1.Wizard(10, 250, boss);
            var expected = wizard_1.Wizard.STATUS_VICTORIOUS;
            var actual = wizard.getBattleStatus();
            expect(actual).toBe(expected);
        });
        test('wizard is alive, boss is dead', function () {
            var boss = { hp: 1, damage: 8 };
            var wizard = new wizard_1.Wizard(-1, 250, boss);
            var expected = wizard_1.Wizard.STATUS_DEFEATED;
            var actual = wizard.getBattleStatus();
            expect(actual).toBe(expected);
        });
    });
    describe('magicMissile()', function () {
        test('should cost 53 mana, and deal 4 damage', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 250, boss);
            var expectedBossHp = boss.hp - wizard_1.Wizard.MAGIC_MISSILE_DAMAGE;
            var expectedWizardMana = wizard.mana - wizard_1.Wizard.MAGIC_MISSILE_COST;
            //when
            wizard.magicMissile();
            //then
            var actualBossHp = wizard.boss.hp;
            var actualWizardMana = wizard.mana;
            expect(actualBossHp).toBe(expectedBossHp);
            expect(actualWizardMana).toBe(expectedWizardMana);
        });
        test('should throw with insufficient mana', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 40, boss);
            var expectedBossHp = boss.hp;
            var expectedWizardMana = wizard.mana;
            //when
            expect(function () {
                wizard.magicMissile();
            }).toThrow('Insufficient mana to cast magic missile');
            //then
            var actualBossHp = wizard.boss.hp;
            var actualWizardMana = wizard.mana;
            expect(actualBossHp).toBe(expectedBossHp);
            expect(actualWizardMana).toBe(expectedWizardMana);
        });
    });
    describe('drain()', function () {
        test('should cost 73 mana, deal 2 damage, and heal 2 damage', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 250, boss);
            var expectedBossHp = boss.hp - wizard_1.Wizard.DRAIN_DAMAGE;
            var expectedWizardMana = wizard.mana - wizard_1.Wizard.DRAIN_COST;
            var expectedWizardHp = wizard.hp + wizard_1.Wizard.DRAIN_HEAL;
            //when
            wizard.drain();
            //then
            var actualBossHp = wizard.boss.hp;
            var actualWizardMana = wizard.mana;
            var actualWizardHp = wizard.hp;
            expect(actualBossHp).toBe(expectedBossHp);
            expect(actualWizardMana).toBe(expectedWizardMana);
            expect(actualWizardHp).toBe(expectedWizardHp);
        });
        test('should throw with insufficient mana', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 40, boss);
            var expectedBossHp = boss.hp;
            var expectedWizardMana = wizard.mana;
            var expectedWizardHp = wizard.hp;
            //when
            expect(function () {
                wizard.drain();
            }).toThrow('Insufficient mana to cast drain');
            //then
            var actualBossHp = wizard.boss.hp;
            var actualWizardMana = wizard.mana;
            var actualWizardHp = wizard.hp;
            expect(actualBossHp).toBe(expectedBossHp);
            expect(actualWizardMana).toBe(expectedWizardMana);
            expect(actualWizardHp).toBe(expectedWizardHp);
        });
    });
    describe('shield()', function () {
        test('should cost 113 mana, and set shield turns to 7', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 250, boss);
            var expectedShieldTurns = wizard_1.Wizard.SHIELD_TURNS;
            //when
            wizard.shield();
            //then
            var actualShieldTurns = wizard.shieldTurns;
            expect(actualShieldTurns).toBe(expectedShieldTurns);
        });
        test('should throw with insufficient mana', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 40, boss);
            var expectedShieldTurns = 0;
            //when
            expect(function () {
                wizard.drain();
            }).toThrow('Insufficient mana to cast drain');
            //then
            var actualShieldTurns = 0;
            expect(actualShieldTurns).toBe(expectedShieldTurns);
        });
        test('should throw when there is an active shield effect', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 400, boss);
            var expectedShieldTurns = wizard_1.Wizard.SHIELD_TURNS;
            //when
            expect(function () {
                wizard.shield();
                wizard.shield();
            }).toThrow('Cannot stack shield effect');
            //then
            var actualShieldTurns = wizard_1.Wizard.SHIELD_TURNS;
            expect(actualShieldTurns).toBe(expectedShieldTurns);
        });
    });
    describe('poison()', function () {
        test('should cost 173 mana, and set shield turns to 6', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 250, boss);
            var expectedPoisonTurns = wizard_1.Wizard.POISON_TURNS;
            //when
            wizard.poison();
            //then
            var actualPoisonTurns = wizard.poisonTurns;
            expect(actualPoisonTurns).toBe(expectedPoisonTurns);
        });
        test('should throw with insufficient mana', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 40, boss);
            var expectedPoisonTurns = 0;
            //when
            expect(function () {
                wizard.poison();
            }).toThrow('Insufficient mana to cast poison');
            //then
            var actualPoisonTurns = 0;
            expect(actualPoisonTurns).toBe(expectedPoisonTurns);
        });
        test('should throw when there is an active poison effect', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 400, boss);
            var expectedPoisonTurns = wizard_1.Wizard.POISON_TURNS;
            //when
            expect(function () {
                wizard.poison();
                wizard.poison();
            }).toThrow('Cannot stack poison effect');
            //then
            var actualPoisonTurns = wizard_1.Wizard.POISON_TURNS;
            expect(actualPoisonTurns).toBe(expectedPoisonTurns);
        });
    });
    describe('recharge()', function () {
        test('should cost 229 mana, and set shield turns to 5', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 250, boss);
            var expectedrechargeTurns = wizard_1.Wizard.RECHARGE_TURNS;
            //when
            wizard.recharge();
            //then
            var actualrechargeTurns = wizard.rechargeTurns;
            expect(actualrechargeTurns).toBe(expectedrechargeTurns);
        });
        test('should throw with insufficient mana', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 40, boss);
            var expectedrechargeTurns = 0;
            //when
            expect(function () {
                wizard.recharge();
            }).toThrow('Insufficient mana to cast recharge');
            //then
            var actualrechargeTurns = 0;
            expect(actualrechargeTurns).toBe(expectedrechargeTurns);
        });
        test('should throw when there is an active recharge effect', function () {
            //given
            var boss = { hp: 13, damage: 8 };
            var wizard = new wizard_1.Wizard(13, 900, boss);
            var expectedrechargeTurns = wizard_1.Wizard.RECHARGE_TURNS;
            //when
            expect(function () {
                wizard.recharge();
                wizard.recharge();
            }).toThrow('Cannot stack recharge effect');
            //then
            var actualrechargeTurns = wizard_1.Wizard.RECHARGE_TURNS;
            expect(actualrechargeTurns).toBe(expectedrechargeTurns);
        });
    });
});
