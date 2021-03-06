export class Computer {
  a: number
  b: number
  offset: number

  constructor(a: number = 0) {
    this.a = a
    this.b = 0
    this.offset = 0
  }

  public runProgram(program: Program) {
    while (this.offset < program.instructions.length) {
      this.run( program.instructions[this.offset])
    }
  }

  private run(instruction: Instruction) {
    switch(instruction.instruction) {
      case 'hlf': {
        this[instruction.register] /= 2
        this.offset++
        break;
      }
      case 'tpl': {
        this[instruction.register] *= 3
        this.offset++
        break;
      }
      case 'inc': {
        this[instruction.register]++
        this.offset++
        break;
      }
      case 'jmp': {
        this.offset += instruction.offset
        break;
      }
      case 'jie': {
        if (this[instruction.register] %2 === 0) {
          this.offset += instruction.offset
        } else {
          this.offset++
        }
        break;
      }
      case 'jio': {
        if (this[instruction.register] === 1) {
          this.offset += instruction.offset
        } else {
          this.offset++
        }
        break;
      }
    }
  }

  getA() { return this.a }
  getB() { return this.b }
}

export class Program {
  instructions: Instruction[]

  constructor(stringInput: string[]) {
    this.instructions = stringInput.map(input => new Instruction(input))
  }
}

const INSTRUCTION_MAP = {
  'hlf': 'hlf',
  'tpl': 'tpl',
  'inc': 'inc',
  'jmp': 'jmp',
  'jie': 'jie',
  'jio': 'jio',
}

const REGISTER_MAP = {
  'a': 'a',
  'b': 'b',
}

class Instruction {
  public readonly instruction: 'hlf' | 'tpl' | 'inc' | 'jmp' | 'jie' |'jio'
  public readonly register: 'a' | 'b' | null
  public readonly offset: number | null

  constructor(inputString: string) {
    const words = inputString.split(' ')
    this.instruction = INSTRUCTION_MAP[words[0]]

    if (words[0] === 'jmp') {
      this.offset = parseInt(words[1])
    } else if (['hlf', 'tpl', 'inc'].includes(words[0])) {
      this.register = REGISTER_MAP[words[1]]
    } else {
      this.register = REGISTER_MAP[words[1][0]]
      this.offset = parseInt(words[2])
    }
  }
}

