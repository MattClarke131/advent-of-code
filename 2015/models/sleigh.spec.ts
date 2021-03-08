import { Sleigh } from './sleigh'

describe('Sleigh', () => {
  describe('getSmallestGroup()', () => {
    test('Example should return 88', () => {
      const presents = [1,2,3,4,5,7,8,9,10,11];
      const sleigh = new Sleigh(presents, 3)

      const expected = 88
      const actual = sleigh.getSmallestGroup()

      expect(actual).toBe(expected)
    })
  })
})
