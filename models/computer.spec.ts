import { Computer, Program } from './computer'
const stringInput = [
  'inc a',
  'jio a, +2',
  'tpl a',
  'inc a',
]

describe('Computer', () => {
  describe('runProgram(program)', () => {
    test('example program sets a to 2', () => {
      const program = new Program(stringInput)
      const computer = new Computer()
      computer.runProgram(program)

      const expectedA = 2
      const actualA = computer.getA()
      expect(actualA).toBe(expectedA)
    })
  })
})
