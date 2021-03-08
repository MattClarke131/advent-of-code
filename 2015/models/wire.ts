import { InstructionBookletInterface } from './instructionBooklet'

type Input = {
  inputType: '' | 'GATE' | 'WIRE' | 'VALUE',
  subtype: '' | 'AND' | 'OR' | 'NOT' | 'LSHIFT' | 'RSHIFT',
  inputA: string | number | null,
  inputB: string | number | null,
}

export class Wire {
  input: Input
  output: number | null
  identifier: string
  instructionBooklet: InstructionBookletInterface
  resolvedWires: object

  constructor(
    wireInstruction: string,
    instructionBooklet: InstructionBookletInterface,
    resolvedWires: object = {},
  ) {
    this.input = {
      inputType: '',
      subtype: '',
      inputA: '',
      inputB: '',
    }
    this.resolvedWires = resolvedWires

    this.identifier = wireInstruction.split('-> ')[1]
    this.output = this.resolvedWires[this.identifier] === undefined ?
      null :
      this.resolvedWires[this.identifier]
    this.parseWireInstruction(wireInstruction)
    this.instructionBooklet = instructionBooklet
  }

  public getOutput() {
    if (this.output !== null) {
      return this.output
    } else if (this.input.inputType === 'WIRE') {
      const requiredWireInstruction = 
        this.instructionBooklet.getInstructionFromIdentifier(this.input.inputA.toString())
      const requiredWire = new Wire(requiredWireInstruction, this.instructionBooklet, this.resolvedWires)
      this.output = requiredWire.getOutput()
    } else { // Gate
      this.output = this.getGateOutput()
    }
    this.resolvedWires[this.identifier] = this.output
    return this.output
  }

  private getGateOutput() {
    let calculatedA
    let calculatedB

    // If inputA is a wire
    if (isNaN(Number(this.input.inputA))) {
      const wireInstruction = this.instructionBooklet.getInstructionFromIdentifier(this.input.inputA.toString())
      const wireA = new Wire(wireInstruction, this.instructionBooklet, this.resolvedWires)
      calculatedA = wireA.getOutput()
    } else {
      calculatedA = this.input.inputA
    }

    // If inputB is a wire
    if (isNaN(Number(this.input.inputB))) {
      const wireInstruction = this.instructionBooklet.getInstructionFromIdentifier(this.input.inputB.toString())
      const wireB = new Wire(wireInstruction, this.instructionBooklet, this.resolvedWires)
      calculatedB = wireB.getOutput()
    } else {
      calculatedB = this.input.inputB
    }

    switch (this.input.subtype) {
      case 'AND': {
        return calculatedA & calculatedB
      }
      case 'OR': {
        return calculatedA | calculatedB
      }
      case 'NOT': {
        return 65536 + ~calculatedA
      }
      case 'LSHIFT': {
        return (calculatedA << calculatedB) % 65536
      }
      case 'RSHIFT': {
        return calculatedA >> calculatedB
      }
      default: {
        throw('Incorrect Gate output')
      }
    }
  }

  private parseWireInstruction(wireInstruction){ 
    // check for gate
    if (wireInstruction.includes('AND')) {
      this.input.inputType = 'GATE'
      this.input.subtype = 'AND'
      this.input.inputA = wireInstruction.split(' ')[0]
      this.input.inputB = wireInstruction.split(' ')[2]
    } else if (wireInstruction.includes('OR')) {
      this.input.inputType = 'GATE'
      this.input.subtype = 'OR'
      this.input.inputA = wireInstruction.split(' ')[0]
      this.input.inputB = wireInstruction.split(' ')[2]
    } else if (wireInstruction.includes('NOT')) {
      this.input.inputType = 'GATE'
      this.input.subtype = 'NOT'
      this.input.inputA = wireInstruction.split(' ')[1]
      this.input.inputB = null
    } else if (wireInstruction.includes('LSHIFT')) {
      this.input.inputType = 'GATE'
      this.input.subtype = 'LSHIFT'
      this.input.inputA = wireInstruction.split(' ')[0]
      this.input.inputB = wireInstruction.split(' ')[2]
    } else if (wireInstruction.includes('RSHIFT')) {
      this.input.inputType = 'GATE'
      this.input.subtype = 'RSHIFT'
      this.input.inputA = wireInstruction.split(' ')[0]
      this.input.inputB = wireInstruction.split(' ')[2]

    // Check if source is another wire
    } else if (isNaN(wireInstruction[0])) { //
      this.input.inputType = 'WIRE'
      this.input.subtype = ''
      this.input.inputA = wireInstruction.split(' ')[0]

    // Input is raw value
    } else {
      this.input.inputType = 'VALUE'
      this.input.inputA = wireInstruction.split(' ')[0]
      this.output = parseInt(wireInstruction.split(' ')[0])
    }
  }
}
