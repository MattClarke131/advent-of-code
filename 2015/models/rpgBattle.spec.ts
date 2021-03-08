import { RPGBattle } from './rpgBattle'

describe('RPGBattle', () => {
  describe('doesPlayerWin()', () => {
    test('player wins', () => {
      const playerStats = {
        hp: 8,
        damage: 5,
        armor: 5
      }
      const bossStats = {
        hp: 12,
        damage: 7,
        armor: 2
      }

      const rpgBattle = RPGBattle.fromFighterData(playerStats, bossStats)
      const actual = rpgBattle.doesPlayerWin()
      const expected = true

      expect(actual).toBe(expected)
    })
  })
})
