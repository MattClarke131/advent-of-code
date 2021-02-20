import { HouseGrid } from './houseGrid'

describe('HouseGrid', () => {
  describe('getNumHousesWithAtLeastOnePresent()', () => {
    test(' ">" should return 2', () => {
      const input = ">"

      const houseGrid = new HouseGrid(input)
      const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
      expect(2).toBe(actual)
    })
    test(' "^>v<" should return 4', () => {
      const input = "^>v<"

      const houseGrid = new HouseGrid(input)
      const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
      expect(4).toBe(actual)
    })
    test(' "^v^v^v^v^v" should return 2', () => {
      const input = ">"

      const houseGrid = new HouseGrid(input)
      const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
      expect(2).toBe(actual)
    })
  })
})
