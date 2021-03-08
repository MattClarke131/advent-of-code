import { Cookie, CookieIngredient, OptimalCookieGenerator } from './cookie'

const butterscotch = new CookieIngredient('Butterscotch', -1, -2, 6, 3, 8)
const cinnamon = new CookieIngredient('Cinnamon', 2, 3, -2, -1, 3)

describe('Cookie', () => {
  describe('calculateScore()', () => {
    test('44 butterscoth and 56 cinnamon should have a score of 62842880', () => {
      const ingredients = [
        { ingredient: butterscotch, amount: 44},
        { ingredient: cinnamon, amount: 56},
      ]
      const cookie = new Cookie(ingredients)
      const actual = cookie.calculateScore()
      const expected = 62842880

      expect(actual).toBe(expected)
    })
  })

})

describe('CookieIngredient', () => {
  describe('static fromString(inputString)', () => {
    test('fromString should create the correct ingredient', () => {
      const inputString = 
        'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8'
      const ingredient = CookieIngredient.fromString(inputString)

      expect(ingredient).toStrictEqual(butterscotch)
    })
  })
})

describe('OptimalCookieGenerator', () => {
  describe('static fromString(instructions)', () => {
    test('fromString should create the correct generator', () => {
      const instructions = [
        'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
        'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
      ]
      const actual = OptimalCookieGenerator.fromString(instructions)
      const expected = new OptimalCookieGenerator([butterscotch, cinnamon])

      expect(actual).toStrictEqual(expected)
    })
  })
  describe('getOptimalCookie()', () => {
    test('two ingredients should return 62842880', () => {
      const optimalCookieGenerator = new OptimalCookieGenerator([butterscotch, cinnamon])
      const highScore = optimalCookieGenerator.getOptimalCookieScore()
      const expected = 62842880

      expect(highScore).toBe(expected)
    })
  })
  describe('getOptimalCookieScoreWithNCalories()', () => {
    test('two ingredients should return 57600000', () => {
      const optimalCookieGenerator = new OptimalCookieGenerator([butterscotch, cinnamon])
      const highScore = optimalCookieGenerator.getOptimalCookieScoreWithNCalories(500)
      const expected = 57600000

      expect(highScore).toBe(expected)
    })
  })
})
