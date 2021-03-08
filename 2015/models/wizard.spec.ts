import { Wizard } from './wizard'

const BOSS_HP = 13
const WIZARD_MANA = 2500
const WIZARD_HP = 10

describe('Wizard', () => {
  describe('getPossibleActions', () => {
    test('answer is empty array if not enough mana', () => {
      const mana = Math.min(
        Wizard.MAGIC_MISSILE_COST,
        Wizard.DRAIN_COST,
        Wizard.SHIELD_COST,
        Wizard.POISON_COST,
        Wizard.RECHARGE_COST,
      ) - 1

      const boss = {hp: 10, damage: 8 }
      const wizard = new Wizard(10, mana, boss)
      const actual = wizard.getPossibleActions()
      const expected = []

      expect(actual).toStrictEqual(expected)
    })
    test('answer is cheapest spell', () => {
      const mana = Math.min(
        Wizard.MAGIC_MISSILE_COST,
        Wizard.DRAIN_COST,
        Wizard.SHIELD_COST,
        Wizard.POISON_COST,
        Wizard.RECHARGE_COST,
      ) + 1

      const boss = {hp: 10, damage: 8 }
      const wizard = new Wizard(10, mana, boss)
      const actual = wizard.getPossibleActions()
      const expected = ['magic_missile']

      expect(actual).toStrictEqual(expected)
    })
    test('answer is two cheapest spells', () => {
      const mana = Math.max(
        Wizard.MAGIC_MISSILE_COST,
        Wizard.DRAIN_COST,
      ) + 1

      const boss = {hp: 10, damage: 8 }
      const wizard = new Wizard(10, mana, boss)
      const actual = wizard.getPossibleActions()
      const expected = ['magic_missile', 'drain']

      expect(actual).toStrictEqual(expected)
    })
  })
  describe('beginWizardTurn()', () => {
    test('effects all decrease', () => {
      //given
      const boss = { hp: BOSS_HP, damage: 8 }
      const wizard = new Wizard(10, WIZARD_MANA, boss)

      //when
      wizard.shield()
      wizard.poison()
      wizard.recharge()
      wizard.mana = WIZARD_MANA
      wizard.beginWizardTurn()

      //then
      expect(wizard.shieldTurns).toBe(Wizard.SHIELD_TURNS - 1)
      expect(wizard.poisonTurns).toBe(Wizard.POISON_TURNS - 1)
      expect(boss.hp).toBe(BOSS_HP - Wizard.POISON_DAMAGE)
      expect(wizard.rechargeTurns).toBe(Wizard.RECHARGE_TURNS - 1)
      expect(wizard.mana).toBe(WIZARD_MANA + Wizard.RECHARGE_AMOUNT)
    })
  })
  describe('beginBossTurn()', () => {
    test('effects all decrease', () => {
      //given
      const boss = { hp: BOSS_HP, damage: 8 }
      const wizard = new Wizard(10, WIZARD_MANA, boss)

      //when
      wizard.shield()
      wizard.poison()
      wizard.recharge()
      wizard.mana = WIZARD_MANA
      wizard.beginBossTurn()

      //then
      expect(wizard.shieldTurns).toBe(Wizard.SHIELD_TURNS - 1)
      expect(wizard.poisonTurns).toBe(Wizard.POISON_TURNS - 1)
      expect(boss.hp).toBe(BOSS_HP - Wizard.POISON_DAMAGE)
      expect(wizard.rechargeTurns).toBe(Wizard.RECHARGE_TURNS - 1)
      expect(wizard.mana).toBe(WIZARD_MANA + Wizard.RECHARGE_AMOUNT)
    })
  })
  describe('bossAttack()', () => {
    test('when wizard has no shield', () => {
      //given
      const boss = { hp: BOSS_HP, damage: 8 }
      const wizard = new Wizard(WIZARD_HP, WIZARD_MANA, boss)

      //when
      wizard.bossAttack()

      //then
      expect(wizard.hp).toBe(WIZARD_HP - wizard.boss.damage)
    })
    test('when wizard no shield', () => {
      //given
      const boss = { hp: BOSS_HP, damage: 8 }
      const wizard = new Wizard(10, WIZARD_MANA, boss)

      //when
      wizard.shieldTurns = 1
      wizard.bossAttack()

      //then
      const expectedWizardHp = WIZARD_HP - wizard.boss.damage + Wizard.SHIELD_AMOUNT
      expect(wizard.hp).toBe(expectedWizardHp)
    })
  })
  describe('getBattleStatus()', () => {
    test('both battlers are alive', () => {
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(10, 250, boss)
      const expected = Wizard.STATUS_BATTLING
      const actual = wizard.getBattleStatus()

      expect(actual).toBe(expected)
    })
    test('wizard is alive, boss is dead', () => {
      const boss = { hp: -1, damage: 8 }
      const wizard = new Wizard(10, 250, boss)
      const expected = Wizard.STATUS_VICTORIOUS
      const actual = wizard.getBattleStatus()

      expect(actual).toBe(expected)
    })
    test('wizard is alive, boss is dead', () => {
      const boss = { hp: 1, damage: 8 }
      const wizard = new Wizard(-1, 250, boss)
      const expected = Wizard.STATUS_DEFEATED
      const actual = wizard.getBattleStatus()

      expect(actual).toBe(expected)
    })
  })
  describe('magicMissile()', () => {
    test('should cost 53 mana, and deal 4 damage', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 250, boss)

      const expectedBossHp = boss.hp - Wizard.MAGIC_MISSILE_DAMAGE
      const expectedWizardMana = wizard.mana - Wizard.MAGIC_MISSILE_COST

      //when
      wizard.magicMissile()

      //then
      const actualBossHp = wizard.boss.hp
      const actualWizardMana = wizard.mana
      expect(actualBossHp).toBe(expectedBossHp)
      expect(actualWizardMana).toBe(expectedWizardMana)
    })
    test('should throw with insufficient mana', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 40, boss)

      const expectedBossHp = boss.hp
      const expectedWizardMana = wizard.mana

      //when
      expect(() => {
        wizard.magicMissile()
      }).toThrow('Insufficient mana to cast magic missile');

      //then
      const actualBossHp = wizard.boss.hp
      const actualWizardMana = wizard.mana
      expect(actualBossHp).toBe(expectedBossHp)
      expect(actualWizardMana).toBe(expectedWizardMana)
    })
  })
  describe('drain()', () => {
    test('should cost 73 mana, deal 2 damage, and heal 2 damage', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 250, boss)

      const expectedBossHp = boss.hp - Wizard.DRAIN_DAMAGE
      const expectedWizardMana = wizard.mana - Wizard.DRAIN_COST
      const expectedWizardHp = wizard.hp + Wizard.DRAIN_HEAL

      //when
      wizard.drain()

      //then
      const actualBossHp = wizard.boss.hp
      const actualWizardMana = wizard.mana
      const actualWizardHp = wizard.hp

      expect(actualBossHp).toBe(expectedBossHp)
      expect(actualWizardMana).toBe(expectedWizardMana)
      expect(actualWizardHp).toBe(expectedWizardHp)
    })
    test('should throw with insufficient mana', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 40, boss)

      const expectedBossHp = boss.hp
      const expectedWizardMana = wizard.mana
      const expectedWizardHp = wizard.hp

      //when
      expect(() => {
        wizard.drain()
      }).toThrow('Insufficient mana to cast drain');

      //then
      const actualBossHp = wizard.boss.hp
      const actualWizardMana = wizard.mana
      const actualWizardHp = wizard.hp
      expect(actualBossHp).toBe(expectedBossHp)
      expect(actualWizardMana).toBe(expectedWizardMana)
      expect(actualWizardHp).toBe(expectedWizardHp)
    })
  })
  describe('shield()', () => {
    test('should cost 113 mana, and set shield turns to 7', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 250, boss)

      const expectedShieldTurns = Wizard.SHIELD_TURNS

      //when
      wizard.shield()

      //then
      const actualShieldTurns = wizard.shieldTurns

      expect(actualShieldTurns).toBe(expectedShieldTurns)
    })
    test('should throw with insufficient mana', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 40, boss)

      const expectedShieldTurns = 0

      //when
      expect(() => {
        wizard.drain()
      }).toThrow('Insufficient mana to cast drain');

      //then
      const actualShieldTurns = 0
      expect(actualShieldTurns).toBe(expectedShieldTurns)
    })
    test('should throw when there is an active shield effect', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 400, boss)

      const expectedShieldTurns = Wizard.SHIELD_TURNS
      //when
      expect(() => {
        wizard.shield()
        wizard.shield()
      }).toThrow('Cannot stack shield effect');

      //then
      const actualShieldTurns = Wizard.SHIELD_TURNS
      expect(actualShieldTurns).toBe(expectedShieldTurns)
    })
  })
  describe('poison()', () => {
    test('should cost 173 mana, and set shield turns to 6', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 250, boss)

      const expectedPoisonTurns = Wizard.POISON_TURNS

      //when
      wizard.poison()

      //then
      const actualPoisonTurns = wizard.poisonTurns

      expect(actualPoisonTurns).toBe(expectedPoisonTurns)
    })
    test('should throw with insufficient mana', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 40, boss)

      const expectedPoisonTurns = 0

      //when
      expect(() => {
        wizard.poison()
      }).toThrow('Insufficient mana to cast poison');

      //then
      const actualPoisonTurns = 0
      expect(actualPoisonTurns).toBe(expectedPoisonTurns)
    })
    test('should throw when there is an active poison effect', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 400, boss)

      const expectedPoisonTurns = Wizard.POISON_TURNS
      //when
      expect(() => {
        wizard.poison()
        wizard.poison()
      }).toThrow('Cannot stack poison effect');

      //then
      const actualPoisonTurns = Wizard.POISON_TURNS
      expect(actualPoisonTurns).toBe(expectedPoisonTurns)
    })
  })
  describe('recharge()', () => {
    test('should cost 229 mana, and set shield turns to 5', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 250, boss)

      const expectedrechargeTurns = Wizard.RECHARGE_TURNS

      //when
      wizard.recharge()

      //then
      const actualrechargeTurns = wizard.rechargeTurns

      expect(actualrechargeTurns).toBe(expectedrechargeTurns)
    })
    test('should throw with insufficient mana', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 40, boss)

      const expectedrechargeTurns = 0

      //when
      expect(() => {
        wizard.recharge()
      }).toThrow('Insufficient mana to cast recharge');

      //then
      const actualrechargeTurns = 0
      expect(actualrechargeTurns).toBe(expectedrechargeTurns)
    })
    test('should throw when there is an active recharge effect', () => {
      //given
      const boss = { hp: 13, damage: 8 }
      const wizard = new Wizard(13, 900, boss)

      const expectedrechargeTurns = Wizard.RECHARGE_TURNS
      //when
      expect(() => {
        wizard.recharge()
        wizard.recharge()
      }).toThrow('Cannot stack recharge effect');

      //then
      const actualrechargeTurns = Wizard.RECHARGE_TURNS
      expect(actualrechargeTurns).toBe(expectedrechargeTurns)
    })
  })
})
