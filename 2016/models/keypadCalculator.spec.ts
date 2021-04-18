import KeypadCalculator from './keypadCalculator'

describe('KeypadCalculator', () => {
  describe('getCode()', () => {
    test('case 1 returns 1985', () => {
      const instructions = [
        'ULL',
        'RRDDD',
        'LURDL',
        'UUUUD',
      ]

      const keypadCalculator = new KeypadCalculator(instructions)
      const expected = '1985'
      const actual = keypadCalculator.getBathroomCode()

      expect(actual).toBe(expected)
    })
  })
  describe('getComplexCode()', () => {
    test('case 1 returns 5DB3', () => {
      const instructions = [
        'ULL',
        'RRDDD',
        'LURDL',
        'UUUUD',
      ]

      const keypadCalculator = new KeypadCalculator(instructions)
      const expected = '5DB3'
      const actual = keypadCalculator.getComplexCode()

      expect(actual).toBe(expected)
    })
  })
})
