import { Box } from './box'

describe('Box', () => {
  describe('getRequiredWrapping()', () => {
    test('2x3x4 should return 58', () => {
      // given
      const input = '2x3x4'
      const box = new Box(input)

      // then
      expect(box.getRequiredWrapping()).toBe(58)
    })
    test('1x1x10 should return 43', () => {
      // given
      const input = '1x1x10'
      const box = new Box(input)

      // then
      expect(box.getRequiredWrapping()).toBe(43)
    })
    test('20x3x11 should return 659', () => {
      //given
      const input = '20x3x11'
      const box = new Box(input)

      //then
      const expected = 2 * (20*3 + 20*11 + 3*11) + 3*11
      expect(box.getRequiredWrapping()).toBe(expected)
    })
  })

  describe('getRequiredRibbon()', () => {
    test('2x3x4 should return 34', () => {
      //given
      const input = '2x3x4'
      const box = new Box(input)

      //then
      expect(box.getRequiredRibbon()).toBe(34)
    })
    test('1x1x10 should return 14', () => {
      //given
      const input = '1x1x10'
      const box = new Box(input)

      //then
      expect(box.getRequiredRibbon()).toBe(14)
    })
    test('20x3x11 should return 688', () => {
      //given
      const input = '20x3x11'
      const box = new Box(input)

      //then
      expect(box.getRequiredRibbon()).toBe(688)
    })
  })
})
