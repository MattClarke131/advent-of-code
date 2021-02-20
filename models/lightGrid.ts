export class LightGrid {
  size: number
  lightGrid: object

  constructor(instructions: string[], size: number = 1000) {
    this.size = size
    const parsedInstructions = instructions.map(instruction => new Instruction(instruction))
    this.populateGrid()
    this.applyAllInstructions(parsedInstructions)
  }

  public countOnLights() {
    let count = 0
    for (let i=0; i<this.size; i++) {
      for (let j=0; j<this.size; j++) {
        count += this.lightGrid[i][j]
      }
    }

    return count
  }

  private populateGrid() {
    this.lightGrid = {}

    for (let i=0; i<this.size; i++) {
      this.lightGrid[i] = {}
      for (let j=0; j<this.size; j++) {
        this.lightGrid[i][j] = 0
      }
    }
  }

  private applyAllInstructions(instructions: Instruction[]) {
    instructions.forEach(instruction => this.applyInstruction(instruction))
  }

  private applyInstruction(instruction: Instruction) {
    switch (instruction.getAction()) {
      case 'turn on': {
        this.turnOnLights(instruction)
        break;
      }
      case 'turn off': {
        this.turnOffLights(instruction)
        break;
      }
      case 'toggle': {
        this.toggleLights(instruction)
        break;
      }
    }
  }

  private turnOnLights(instruction) {
    for (let x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
      for (let y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
        this.lightGrid[x][y] += 1
      }
    }
  }

  private turnOffLights(instruction) {
    for (let x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
      for (let y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
        this.lightGrid[x][y] -= 1
        this.lightGrid[x][y] = Math.max(this.lightGrid[x][y], 0)
      }
    }
  }

  private toggleLights(instruction)  {
    for (let x = instruction.getLowerCoord()['x']; x <= instruction.getUpperCoord()['x']; x++) {
      for (let y = instruction.getLowerCoord()['y']; y <= instruction.getUpperCoord()['y']; y++) {
        this.lightGrid[x][y] += 2
      }
    }
  }
}

class Instruction {
  action: 'toggle' | 'turn on' | 'turn off';
  lowerCoord: {x: number, y: number}
  upperCoord: {x: number, y: number}

  constructor(instruction: string) {
    this.action = this.parseAction(instruction)
    this.lowerCoord = this.parseLowerCoord(instruction)
    this.upperCoord = this.parseUpperCoord(instruction)
  }

  public getLowerCoord() {
    return this.lowerCoord
  }

  public getUpperCoord() {
    return this.upperCoord
  }

  public getAction() {
    return this.action
  }

  private parseAction(instruction) {
    switch (instruction.slice(0,7)) {
      case 'toggle ': {
        return 'toggle'
        break;
      }
      case 'turn on': {
        return 'turn on'
        break;
      }
      case 'turn of': {
        return 'turn off'
        break;
      }
    }
  }

  private parseLowerCoord(instruction) {
    let startIndex

    switch(instruction.slice(6,7)) {
      case ' ': {
        startIndex = 7
        break;
      }
      case 'n': {
        startIndex = 8
        break;
      }
      case 'f': {
        startIndex = 9
        break;
      }
    }

    const commaIndex = instruction.indexOf(',')
    const endIndex = instruction.indexOf(' through')

    return {
      x: parseInt(instruction.slice(startIndex, commaIndex)),
      y: parseInt(instruction.slice(commaIndex+1, endIndex))
    }
  }

  private parseUpperCoord(instruction) {
    const strCoord = instruction.slice(instruction.indexOf('through ')+8)
    const commaIndex = strCoord.indexOf(',')

    return {
      x: parseInt(strCoord.slice(0,commaIndex)),
      y: parseInt(strCoord.slice(commaIndex+1))
    }
  }
}
