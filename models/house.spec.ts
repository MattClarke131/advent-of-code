import { House } from './house'

describe('House', () => {
  describe('firstHouseToReach(number)', () => {
    test('10 is 1', () => {
      const house = new House()
      const input = 10
      const actual = house.firstHouseToReach(input)
      const expected = 1

      expect(actual).toBe(expected)
    })
    test('11 is 2', () => {
      const house = new House()
      const input = 11
      const actual = house.firstHouseToReach(input)
      const expected = 2

      expect(actual).toBe(expected)
    })
    test('30 is 2', () => {
      const house = new House()
      const input = 30
      const actual = house.firstHouseToReach(input)
      const expected = 2

      expect(actual).toBe(expected)
    })
    test('60 is 4', () => {
      const house = new House()
      const input = 60
      const actual = house.firstHouseToReach(input)
      const expected = 4

      expect(actual).toBe(expected)
    })
    test('150 is 8', () => {
      const house = new House()
      const input = 150
      const actual = house.firstHouseToReach(input)
      const expected = 8

      expect(actual).toBe(expected)
    })
  })
  describe('firstHouseToReachWithReasonableElvesWithReasonableElves(number)', () => {
    test('10 is 1', () => {
      const house = new House()
      const input = 10
      const actual = house.firstHouseToReachWithReasonableElves(input)
      const expected = 1

      expect(actual).toBe(expected)
    })
    test('12 is 2', () => {
      const house = new House()
      const input = 12
      const actual = house.firstHouseToReachWithReasonableElves(input)
      const expected = 2

      expect(actual).toBe(expected)
    })
    test('30 is 2', () => {
      const house = new House()
      const input = 30
      const actual = house.firstHouseToReachWithReasonableElves(input)
      const expected = 2

      expect(actual).toBe(expected)
    })
    test('60 is 4', () => {
      const house = new House()
      const input = 60
      const actual = house.firstHouseToReachWithReasonableElves(input)
      const expected = 4

      expect(actual).toBe(expected)
    })
    test('150 is 8', () => {
      const house = new House()
      const input = 150
      const actual = house.firstHouseToReachWithReasonableElves(input)
      const expected = 8

      expect(actual).toBe(expected)
    })
  })
})
