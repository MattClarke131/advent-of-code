import { LifeGrid } from './lifeGrid'

const initialState = [
  '.#.#.#',
  '...##.',
  '#....#',
  '..#...',
  '#.#..#',
  '####..',
]

describe('LifeGrid', () => {
  describe('getLightsOnAfterSteps(n)', () => {
    test('0 steps returns 15', () => {
      const lifeGrid = new LifeGrid(initialState)
      const steps = 0
      const expected = 15
      const actual = lifeGrid.getLightsOnAfterSteps(steps)

      expect(actual).toBe(expected)
    })
    test('1 steps returns 11', () => {
      const lifeGrid = new LifeGrid(initialState)
      const steps = 1
      const expected = 11
      const actual = lifeGrid.getLightsOnAfterSteps(steps)

      expect(actual).toBe(expected)
    })
    test('2 steps returns 8', () => {
      const lifeGrid = new LifeGrid(initialState)
      const steps = 2
      const expected = 8
      const actual = lifeGrid.getLightsOnAfterSteps(steps)

      expect(actual).toBe(expected)
    })
    test('3 steps returns 4', () => {
      const lifeGrid = new LifeGrid(initialState)
      const steps = 3
      const expected = 4
      const actual = lifeGrid.getLightsOnAfterSteps(steps)

      expect(actual).toBe(expected)
    })
    test('4 steps returns 4', () => {
      const lifeGrid = new LifeGrid(initialState)
      const steps = 4
      const expected = 4
      const actual = lifeGrid.getLightsOnAfterSteps(steps)

      expect(actual).toBe(expected)
    })
  })
})
