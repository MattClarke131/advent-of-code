import { Wire } from './wire'
import { InstructionBooklet } from './instructionBooklet'

const mockInstructions1 = [
  '123 -> x',
  '456 -> y',
  'x AND y -> d',
  'x OR y -> e',
  'x LSHIFT 2 -> f',
  'y RSHIFT 2 -> g',
  'NOT x -> h',
  'NOT y -> i',
]

const instructionBooklet1 = new InstructionBooklet(mockInstructions1)

const mockInstructions2 = [
  '123 -> ab',
  '456 -> cd',
  'ab AND cd -> e'
]
const instructionBooklet2 = new InstructionBooklet(mockInstructions2)


describe('Wire', () => {
  describe('getOutput', () => {
    describe('mockInstructions11', () => {
      test('d should be 72', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('d')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(72)
      })
      test('e should be 507', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('e')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(507)
      })
      test('f should be 492', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('f')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(492)
      })
      test('g should be 114', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('g')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(114)
      })
      test('h should be 65412', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('h')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(65412)
      })
      test('i should be 65079', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('i')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(65079)
      })
      test('x should be 123', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('x')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(123)
      })
      test('y should be 456', () => {
        const wireInstruction = instructionBooklet1.getInstructionFromIdentifier('y')
        const wire = new Wire(wireInstruction, instructionBooklet1)
        const result = wire.getOutput()

        expect(result).toBe(456)
      })
    })


    describe('mockInstructions2', () => {
      test('ab should be 123', () => {
        const wireInstruction = instructionBooklet2.getInstructionFromIdentifier('ab')
        const wire = new Wire(wireInstruction, instructionBooklet2)
        const result = wire.getOutput()

        expect(result).toBe(123)
      })
      test('cd should be 456', () => {
        const wireInstruction = instructionBooklet2.getInstructionFromIdentifier('cd')
        const wire = new Wire(wireInstruction, instructionBooklet2)
        const result = wire.getOutput()

        expect(result).toBe(456)
      })
      test('e should be 72', () => {
        const wireInstruction = instructionBooklet2.getInstructionFromIdentifier('e')
        const wire = new Wire(wireInstruction, instructionBooklet2)
        const result = wire.getOutput()

        expect(result).toBe(72)
      })
    })
  })
})
