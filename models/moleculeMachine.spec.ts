import { MoleculeMachine } from './moleculeMachine'

const testReplacements = [
  'H => HO',
  'H => OH',
  'O => HH',
]
const testReplacementsWithLowerCase = [
  'H => HCi',
  'H => CiH',
  'Ci => HH',
]

describe('MoleculeMachine', () => {
  describe('getNumberOfDistinctMolecules(startingMolecule)', () => {
    test('HOH has 4 distinct molecules', () => {
      const startingMolecule = 'HOH'
      const moleculeMachine = new MoleculeMachine(testReplacements)

      const actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule)
      const expected = 4

      expect(actual).toBe(expected)
    })
    test('HOHOHO has 7 distinct molecules', () => {
      const startingMolecule = 'HOHOHO'
      const moleculeMachine = new MoleculeMachine(testReplacements)

      const actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule)
      const expected = 7

      expect(actual).toBe(expected)
    })
    test('HCiH has 4 distinct molecules', () => {
      const startingMolecule = 'HCiH'
      const moleculeMachine = new MoleculeMachine(testReplacementsWithLowerCase)

      const actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule)
      const expected = 4

      expect(actual).toBe(expected)
    })
    test('HCiH has 7 distinct molecules', () => {
      const startingMolecule = 'HCiHCiHCi'
      const moleculeMachine = new MoleculeMachine(testReplacementsWithLowerCase)

      const actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule)
      const expected = 7

      expect(actual).toBe(expected)
    })
  })
})
