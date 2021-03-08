import { NiceCheck } from './niceCheck'

describe('NiceCheck', () => {
  describe('isNice()', () => {
    test('ugknbfddgicrmopn returns true', () => {
      const input = 'ugknbfddgicrmopn'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(true)
    })
    test('aaa returns true', () => {
      const input = 'aaa'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(true)
    })
    test('aeii returns true', () => {
      const input = 'aeii'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(true)
    })
    test('jchzalrnumimnmhp returns false', () => {
      const input = 'jchzalrnumimnmhp'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(false)
    })
    test('haegwjzuvuyypxyu returns false', () => {
      const input = 'haegwjzuvuyypxyu'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(false)
    })
    test('dvszwmarrgswjxmb returns false', () => {
      const input = 'dvszwmarrgswjxmb'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(false)
    })
    test('sszojmmrrkwuftyv returns false', () => {
      const input = 'sszojmmrrkwuftyv'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(false)
    })
    test('aaexx returns true', () => {
      const input = 'aaexx'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNice()).toBe(true)
    })
  })

  describe('isNiceV2()', () => {
    test('qjhvhtzxzqqjkmpb returns true', () => {
      const input = 'qjhvhtzxzqqjkmpb'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNiceV2()).toBe(true)
    })
    test('xxyxx returns true', () => {
      const input = 'xxyxx'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNiceV2()).toBe(true)
    })
    test('uurcxstgmygtbstg returns false', () => {
      const input = 'uurcxstgmygtbstg'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNiceV2()).toBe(false)
    })
    test('ieodomkazucvgmuy returns false', () => {
      const input = 'ieodomkazucvgmuy'
      const niceCheck = new NiceCheck(input)

      expect(niceCheck.isNiceV2()).toBe(false)
    })
  })
})
