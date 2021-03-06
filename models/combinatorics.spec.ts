import { Combinatorics } from './combinatorics'

describe('Combinatorics', () => {
  describe('iterateComboWithCallback(array, choose, callback)', () => {
    test('[1,2,3,4,5,6] choose 1 should callback 6 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 1, callback)

      const expectedCount = 6

      expect(count).toBe(expectedCount)
    })
    test('[1,2,3,4,5,6] choose 2 should callback 15 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 2, callback)

      const expectedCount = 15

      expect(count).toBe(expectedCount)
    })
    test('[1,2,3,4,5,6] choose 3 should callback 20 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 3, callback)

      const expectedCount = 20

      expect(count).toBe(expectedCount)
    })
    test('[1,2,3,4,5,6] choose 4 should callback 15 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 4, callback)

      const expectedCount = 15

      expect(count).toBe(expectedCount)
    })
    test('[1,2,3,4,5,6] choose 5 should callback 6 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 5, callback)

      const expectedCount = 6

      expect(count).toBe(expectedCount)
    })
    test('[1,2,3,4,5,6] choose 6 should callback 6 times', () => {
      const testArray = [1,2,3,4,5,6]
      let count = 0
      const callback = (combination) => count++
      Combinatorics.iterateComboWithCallback(testArray, 6, callback)

      const expectedCount = 1

      expect(count).toBe(expectedCount)
    })
  })
})
