import { Md5Calc } from './md5Calc'

describe('md5Calc', () => {
  describe('getLowestHashWithNZeroes(n)', () => {
    test('abcdef should return 609043 for 5 zeroes', () => {
      const secretKey = 'abcdef'
      const md5Calc = new Md5Calc(secretKey)

      expect(md5Calc.getLowestHashWithNZeroes(5)).toBe(609043)
    })
  })
  describe('getLowestHashWithNZeroes(n)', () => {
    test('pqrstuv should return 1048970 for 5 zeroes', () => {
      const secretKey = 'pqrstuv'
      const md5Calc = new Md5Calc(secretKey)

      expect(md5Calc.getLowestHashWithNZeroes(5)).toBe(1048970)
    })
  })
})
