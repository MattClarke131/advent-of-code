import { AccountingBook } from './accountingBook'

describe('AccountingBook', () => {
  describe('getNumberSum()', () => {
    test('`[1,2,3]` should return 6', () => {
      const input = `[1,2,3]`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 6

      expect(actual).toBe(expected)
    })
    test('`{"a":2, "b":4}` should return 6', () => {
      const input = `"{"a":2, "b":4}"`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 6

      expect(actual).toBe(expected)
    })
    test('`[[[3]]]` should return 3', () => {
      const input = `[[[3]]]`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 3

      expect(actual).toBe(expected)
    })
    test('`{"a}:{"b":4},"c":-1` should return 3', () => {
      const input = `{"a}:{"b":4},"c":-1`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 3

      expect(actual).toBe(expected)
    })
    test('`{"a":[-1,1]}` should return 0', () => {
      const input = `{"a":[-1,1]}`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 0

      expect(actual).toBe(expected)
    })
    test('`[-1,{"a":1}]` should return 0', () => {
      const input = `[-1,{"a":1}]`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 0

      expect(actual).toBe(expected)
    })
    test('`[]` should return 0', () => {
      const input = `[]`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 0

      expect(actual).toBe(expected)
    })
    test('`{}` should return 0', () => {
      const input = `{}`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 0

      expect(actual).toBe(expected)
    })
    test('`23` should return 23', () => {
      const input = `23`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNumberSum()
      const expected = 23

      expect(actual).toBe(expected)
    })
  })

  describe('getNonRedNumberSum()', () => {
    test('`[1,2,3]` should return 6', () => {
      const input = `[1,2,3]`
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNonRedNumberSum()
      const expected = 6

      expect(actual).toBe(expected)
    })
    test('`[1,{"c":"red","b":2},3]` should return 4', () => {
      const input = '[1,{"c":"red","b":2},3]'
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNonRedNumberSum()
      const expected = 4

      expect(actual).toBe(expected)
    })
    test('`[1,"red",5]` should return 6', () => {
      const input = '[1,"red",5]'
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNonRedNumberSum()
      const expected = 6

      expect(actual).toBe(expected)
    })
    test('`{"d":"red","e":[1,2,3,4],"f":5}` should return 0', () => {
      const input = '{"d":"red","e":[1,2,3,4],"f":5}'
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNonRedNumberSum()
      const expected = 0

      expect(actual).toBe(expected)
    })
    test('`more complicated object` should return 7', () => {
      const input = '[1,2,3,{"a":{},"b":{"x":"red"},"c":4}, {"d": -3}]'
      const accountingBook = new AccountingBook(input)
      const actual = accountingBook.getNonRedNumberSum()
      const expected = 7

      expect(actual).toBe(expected)
    })
  })
})
