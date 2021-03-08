import { Reindeer } from './reindeer'

const comet = new Reindeer('Comet', 14,10,127)
const dancer = new Reindeer('Dancer', 16,11,162)

describe('Reindeer', () => {
  describe('getDistanceTravelled(timeInSeconds', () => {
    describe('Comet', () => {
      test('travels 14km in 1 second', () => {
        const distance = comet.getDistanceTravelled(1)
        const expectedDistance = 14

        expect(distance).toBe(expectedDistance)
      })
      test('travels 140km in 10 second', () => {
        const distance = comet.getDistanceTravelled(10)
        const expectedDistance = 140

        expect(distance).toBe(expectedDistance)
      })
      test('travels 140km in 11 second', () => {
        const distance = comet.getDistanceTravelled(11)
        const expectedDistance = 140

        expect(distance).toBe(expectedDistance)
      })
      test('travels 140km in 12 second', () => {
        const distance = comet.getDistanceTravelled(12)
        const expectedDistance = 140

        expect(distance).toBe(expectedDistance)
      })
      test('travels 1120 in 1000 second', () => {
        const distance = comet.getDistanceTravelled(1000)
        const expectedDistance = 1120

        expect(distance).toBe(expectedDistance)
      })
    })
    describe('Dancer', () => {
      test('travels 16km in 1 second', () => {
        const distance = dancer.getDistanceTravelled(1)
        const expectedDistance = 16

        expect(distance).toBe(expectedDistance)
      })
      test('travels 160km in 10 second', () => {
        const distance = dancer.getDistanceTravelled(10)
        const expectedDistance = 160

        expect(distance).toBe(expectedDistance)
      })
      test('travels 176km in 11 second', () => {
        const distance = dancer.getDistanceTravelled(11)
        const expectedDistance = 176

        expect(distance).toBe(expectedDistance)
      })
      test('travels 176 in 12 second', () => {
        const distance = dancer.getDistanceTravelled(12)
        const expectedDistance = 176

        expect(distance).toBe(expectedDistance)
      })
      test('travels 1056 in 1000 second', () => {
        const distance = dancer.getDistanceTravelled(1000)
        const expectedDistance = 1056

        expect(distance).toBe(expectedDistance)
      })
    })
  })
  describe('static fromString(inputString)', () => {
    test('Comet string should have correct properties', () => {
      const cometString =
        'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.'
      const comet = Reindeer.fromString(cometString)
      const expected = new Reindeer('Comet', 14,10,127)

      expect(comet).toStrictEqual(expected)
    })
    test('Dancer string should have correct properties', () => {
      const dancerString =
        'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
      const dancer = Reindeer.fromString(dancerString)
      const expected = new Reindeer('Dancer', 16,11,162)

      expect(dancer).toStrictEqual(expected)
    })
  })
})
