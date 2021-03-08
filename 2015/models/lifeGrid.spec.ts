import { LifeGrid } from './lifeGrid'

const initialState = [
  '.#.#.#',
  '...##.',
  '#....#',
  '..#...',
  '#.#..#',
  '####..',
]

const initialState2 = [
  '##.#.#',
  '...##.',
  '#....#',
  '..#...',
  '#.#..#',
  '####.#',
]

describe('LifeGrid', () => {
  describe('getLightsOnAfterSteps(n)', () => {
    describe('When corners are not locked', () => {
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
    describe('When corners are locked', () => {
      test('0 steps returns 17', () => {
        //given
        const lifeGrid = new LifeGrid(initialState2)

        //when
        lifeGrid.lockCorners()
        const steps = 0

        //then
        const expected = 17
        const actual = lifeGrid.getLightsOnAfterSteps(steps)

        expect(actual).toBe(expected)
      })
      test('1 steps returns 18', () => {
        //given
        const lifeGrid = new LifeGrid(initialState2)

        //when
        lifeGrid.lockCorners()
        const steps = 1

        //then
        const expected = 18
        const actual = lifeGrid.getLightsOnAfterSteps(steps)

        expect(actual).toBe(expected)
      })
      test('2 steps returns 18', () => {
        //given
        const lifeGrid = new LifeGrid(initialState2)

        //when
        lifeGrid.lockCorners()
        const steps = 2

        //then
        const expected = 18
        const actual = lifeGrid.getLightsOnAfterSteps(steps)

        expect(actual).toBe(expected)
      })
      test('3 steps returns 18', () => {
        //given
        const lifeGrid = new LifeGrid(initialState2)

        //when
        lifeGrid.lockCorners()
        const steps = 3

        //then
        const expected = 18
        const actual = lifeGrid.getLightsOnAfterSteps(steps)

        expect(actual).toBe(expected)
      })
      test('4 steps returns 14', () => {
        //given
        const lifeGrid = new LifeGrid(initialState2)

        //when
        lifeGrid.lockCorners()
        const steps = 4

        //then
        const expected = 14
        const actual = lifeGrid.getLightsOnAfterSteps(steps)

        expect(actual).toBe(expected)
      })
    })
  })
})
