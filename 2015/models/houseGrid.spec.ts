import { HouseGrid } from './houseGrid'

describe('HouseGrid', () => {
  describe('getNumHousesWithAtLeastOnePresent()', () => {
    describe('without RoboSanta', () => {
      test(' ">" should return 2', () => {
        const input = ">"

        const houseGrid = new HouseGrid(input)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(2)
      })
      test(' "^>v<" should return 4', () => {
        const input = "^>v<"

        const houseGrid = new HouseGrid(input)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(4)
      })
      test(' "^v^v^v^v^v" should return 2', () => {
        const input = "^v^v^v^v^v"

        const houseGrid = new HouseGrid(input)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(2)
      })
    })

    describe('with RoboSanta', () => {
      test(' "^V" should return 3', () => {
        const input = "^v"

        const houseGrid = new HouseGrid(input, true)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(3)
      })
      test(' "^>v<" should return 3', () => {
        const input = "^>v<"

        const houseGrid = new HouseGrid(input, true)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(3)
      })
      test(' "^v^v^v^v^v" should return 11', () => {
        const input = "^v^v^v^v^v"

        const houseGrid = new HouseGrid(input, true)
        const actual = houseGrid.getNumHousesWithAtLeastOnePresent()
        expect(actual).toBe(11)
      })
    })
  })
})
