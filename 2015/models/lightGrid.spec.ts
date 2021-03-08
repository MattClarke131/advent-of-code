import { LightGrid } from './lightGrid'

describe('LightGrid', () => {
  describe.skip('countOnLights', () => {
    test('empty instructions should return 0', () => {
      const instructions = []
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(0)
    })
    test('turn on 0,0 through 1,1 should return 4', () => {
      const instructions = [
        'turn on 0,0 through 1,1'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(4)
    })
    test('turn on and off', () => {
      const instructions = [
        'turn on 0,0 through 1,1',
        'turn off 0,0 through 1,0'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(2)
    })
    test('turn on and toggle', () => {
      const instructions = [
        'turn on 0,0 through 1,1',
        'toggle 1,1 through 2,2'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(6)
    })
  })

  describe('countOnLights part b', () => {
    test('empty instructions should return 0', () => {
      const instructions = []
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(0)
    })
    test('turn on 0,0 through 1,1 should return 4', () => {
      const instructions = [
        'turn on 0,0 through 1,1'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(4)
    })
    test('turn on and off', () => {
      const instructions = [
        'turn on 0,0 through 1,1',
        'turn off 0,0 through 1,0'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(2)
    })
    test('turn on and toggle', () => {
      const instructions = [
        'turn on 0,0 through 1,1',
        'toggle 1,1 through 2,2'
      ]
      const lightGrid = new LightGrid(instructions, 3)

      expect(lightGrid.countOnLights()).toBe(12)
    })

  })
})
