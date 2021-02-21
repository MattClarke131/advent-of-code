import { RouteCalculator } from './routeCalculator'

describe('RouteCalculator', () => {
  describe('calculateShortedRoute', () => {
    test('shortest distance should be 605', () => {
      const rawDistancesArray = [
        'London to Dublin = 464',
        'London to Belfast = 518',
        'Dublin to Belfast = 141',
      ]
      const routeCalculator = new RouteCalculator(rawDistancesArray)
      const actual = routeCalculator.calculateShortestRoute()

      expect(actual).toBe(605)
    })
  })
})
