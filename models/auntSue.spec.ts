import { AuntSue } from './auntSue'

const ticker = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}


describe('AuntSue', () => {
  describe('matchesAnalysis(ticket)', () => {
    test('auntSue1 does not match analysis', () => {
      const rawAuntSue1 = 'Sue 1: children: 1, cars: 2, vizslas: 7'
      const auntSue1 = new AuntSue(rawAuntSue1)
      const actual = auntSue1.matchesAnalysis(ticker)

      expect(actual).toBe(false)
    })
    test('auntSue2 does match analysis', () => {
      const rawAuntSue2 = 'Sue 2: children: 3, cars: 2, vizslas: 0'
      const auntSue2 = new AuntSue(rawAuntSue2)
      const actual = auntSue2.matchesAnalysis(ticker)

      expect(actual).toBe(true)
    })
  })
})
