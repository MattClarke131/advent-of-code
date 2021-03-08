export interface InstructionBookletInterface {
  instructions: string[],
  getInstructionFromIdentifier: (identifier: string) => string
}

export class InstructionBooklet implements InstructionBookletInterface {
  instructions: string[]

  constructor(rawInstructions: string[]) {
    this.instructions = rawInstructions
  }

  getInstructionFromIdentifier(identifier: string) {
    return this.instructions
      .filter(
        instruction =>
        instruction.endsWith(' ' + identifier) 
      )[0]
  }
}
