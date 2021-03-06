import { SnowCodeGenerator } from './snowCodeGenerator'

const start = 20151125

describe('SnowCodeGenerator', () => {
  describe('getCode()', () => {
    test('1,1', () => {
      const row = 1
      const column = 1
      const snowCodeGenerator = new SnowCodeGenerator(start, row, column)
      expect(snowCodeGenerator.getCode()).toBe(20151125)
    })
    test('2,1', () => {
      const row = 2
      const column = 1
      const snowCodeGenerator = new SnowCodeGenerator(start, row, column)
      expect(snowCodeGenerator.getCode()).toBe(31916031)
    })
    test('3,1', () => {
      const row = 3
      const column = 1
      const snowCodeGenerator = new SnowCodeGenerator(start, row, column)
      expect(snowCodeGenerator.getCode()).toBe(16080970)
    })
    test('1,2', () => {
      const row = 1
      const column = 2
      const snowCodeGenerator = new SnowCodeGenerator(start, row, column)
      expect(snowCodeGenerator.getCode()).toBe(18749137)
    })
    test('3,3', () => {
      const row = 3
      const column = 3
      const snowCodeGenerator = new SnowCodeGenerator(start, row, column)
      expect(snowCodeGenerator.getCode()).toBe(1601130)
    })
  })
})
