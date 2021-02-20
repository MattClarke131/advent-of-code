import { AppartmentDirection, AppartmentDirectionParser } from './appartmentDirectionParser'

describe('AppartmentDirectionParser', () => {
  describe('getFloor()', () => {
    test(' "(" parses to 1', () => {
      const input = '('
      const parser = new AppartmentDirectionParser(input)
      expect(parser.getFloor()).toBe(1)
    })
    test(' ")" parses to -1', () => {
      const input = ')'
      const parser = new AppartmentDirectionParser(input)
      expect(parser.getFloor()).toBe(-1)
    })
    test(' "()" parses to 0', () => {
      const input = '()'
      const parser = new AppartmentDirectionParser(input)
      expect(parser.getFloor()).toBe(0)
    })
  })

  describe('getFirstBasementFloor()', () => {
    test(' ")" returns 1', () => {
      const input = ')'
      const parser = new AppartmentDirectionParser(input)
      expect(parser.getFirstBasementFloor()).toBe(1)
    })
    test(' "()())" returns 5', () => {
      const input = '()())'
      const parser = new AppartmentDirectionParser(input)
      expect(parser.getFirstBasementFloor()).toBe(5)
    })
  })
})
