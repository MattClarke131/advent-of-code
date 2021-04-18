type instruction = {
  turn: string,
  steps: number
}

const dir = {
  L: 0,
  U: 1,
  R: 2,
  D: 3,
}

export default class GridTraveler {
  private instructions: instruction[]
  private direction: number
  private x: number
  private y: number

  constructor(inputArray: string[]) {
    this.instructions = this.parseInputArray(inputArray)
    this.x = 0
    this.y = 0
    this.direction = dir['U']


    this.performInstructions()
  }

  private parseInputArray(inputArray: string[]) : instruction[] {
    return inputArray.map( instruction => {
      return {
        turn: instruction.substring(0,1),
        steps: parseInt(instruction.substring(1))
      }
    })
  }

  private performInstructions() {
    this.instructions.forEach( instruction => {
      this.direction += instruction.turn === 'R' ? 5 : 3
      this.direction = this.direction % 4

      switch (this.direction) {
        case dir['L']:
          this.x -= instruction.steps
          break;
        case dir['U']:
          this.y += instruction.steps
          break;
        case dir['R']:
          this.x += instruction.steps
          break;
        case dir['D']:
          this.y -= instruction.steps
          break;
      }
    })
  }

  public getFinalDistance() {
    return Math.abs(this.x) + Math.abs(this.y)
  }
}
