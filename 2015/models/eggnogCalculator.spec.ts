import { EggnogCalculator } from './eggnogCalculator'

describe('EggnogCalculator', () => {
  describe('getNumberOfPermutationsForAmount(liters)', () => {
    test('20,15,10,5,5 and 25 should return 4', () => {
      const containers = [20,15,10,5,5]
      const eggnogCalculator = new EggnogCalculator(containers)
      const liters = 25
      const actual = eggnogCalculator.getNumberOfPermutationsForAmount(liters)
      const expected = 4

      expect(actual).toBe(expected)
    })
  })
  describe('getNumberOfMinimalPermutationsForAmount(liters)', () => {
    test('20,15,10,5,5 and 25 should return 3', () => {
      const containers = [20,15,10,5,5]
      const eggnogCalculator = new EggnogCalculator(containers)
      const liters = 25
      const actual = eggnogCalculator.getNumberOfMinimalPermutationsForAmount(liters)
      const expected = 3

      expect(actual).toBe(expected)
    })
  })
})
