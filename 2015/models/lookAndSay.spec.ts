import { LookAndSay } from './lookAndSay'

describe('LookAndSay', () => {
  describe('getNthDigit(n)', () => {
    const input = 1

    test('one iteration returns 11', () => {
      const lookAndSay = new LookAndSay(input)
      const result = lookAndSay.getNthNumber(1)

      expect(result).toBe('11')
    })
    test('two iteration returns 21', () => {
      const lookAndSay = new LookAndSay(input)
      const result = lookAndSay.getNthNumber(2)

      expect(result).toBe('21')
    })
    test('three iteration returns 1211', () => {
      const lookAndSay = new LookAndSay(input)
      const result = lookAndSay.getNthNumber(3)

      expect(result).toBe('1211')
    })
    test('four iteration returns 111221', () => {
      const lookAndSay = new LookAndSay(input)
      const result = lookAndSay.getNthNumber(4)

      expect(result).toBe('111221')
    })
    test('five iteration returns 312211', () => {
      const lookAndSay = new LookAndSay(input)
      const result = lookAndSay.getNthNumber(5)

      expect(result).toBe('312211')
    })
  })
})
