import Triangle from './triangle'

describe('triangle', () => {
  describe('static isLegal(instruction)', () => {
    test('5   10   25 is not legal', () => {
      const input = '  5    10  25'
      const expected = false
      const actual = Triangle.isLegal(input)

      expect(actual).toBe(expected)
    })
  })
})
