import GridTraveler from './gridTraveler'

describe('GridTraveler', () => {
  describe('getFinalDistance()', () => {
    test('case 1 should return 5', () => {
      const inputArray = ['R2', 'L3']
      const gridTraveler = new GridTraveler(inputArray)

      const actual = gridTraveler.getFinalDistance()
      const expected = 5

      expect(actual).toBe(expected)
    })
    test('case 2 should return 2', () => {
      const inputArray = ['R2', 'R2', 'R2']
      const gridTraveler = new GridTraveler(inputArray)

      const actual = gridTraveler.getFinalDistance()
      const expected = 2

      expect(actual).toBe(expected)
    })
    test('case 1 should return 5', () => {
      const inputArray = ['R5','L5', 'R5', 'R3']
      const gridTraveler = new GridTraveler(inputArray)

      const actual = gridTraveler.getFinalDistance()
      const expected = 12

      expect(actual).toBe(expected)
    })
  })

  describe('getFirstDoubleLocationDistance()', () => {
    test('case 1 should return 4', () => {
      const inputArray = ['R8', 'R4', 'R4', 'R8']
      const gridTraveler = new GridTraveler(inputArray)

      const actual = gridTraveler.getFirstDoubleLocationDistance()
      const expected = 4

      expect(actual).toBe(expected)
    })
  })
})
