export default class KeypadCalculator {
  private instructions: string[]

  constructor(instructions: string[]) {
    this.instructions = instructions
  }

  public getBathroomCode() {
    let currentCode = []
    let currentLocation = {x: 1, y:1}

    this.instructions.forEach( instruction => {
      const movements = instruction.split('')
      movements.forEach( movement => {
        currentLocation = this.getNextLocation(currentLocation, movement)
      })

      currentCode.push(locationMap[currentLocation.x][currentLocation.y])
    })

    return currentCode.join('')
  }

  private getNextLocation(currentLocation: Location, nextStep) : Location {
    switch(nextStep) {
      case 'U': 
        return {
          x: currentLocation.x,
          y: Math.min(currentLocation.y + 1, 2),
        }
        break;
      case 'R': 
        return {
          x: Math.min(currentLocation.x + 1, 2),
          y: currentLocation.y,
        }
        break;
      case 'D': 
        return {
          x: currentLocation.x,
          y: Math.max(currentLocation.y - 1, 0),
        }
        break;
      case 'L': 
        return {
          x: Math.max(currentLocation.x - 1, 0),
          y: currentLocation.y,
        }
        break;
    }
  }

  public getComplexCode() {
    let currentCode = []
    let currentLocation = '5'

    this.instructions.forEach( instruction => {
      const movements = instruction.split('')
      movements.forEach( movement => {
        currentLocation = locationTransitions[currentLocation][movement]
      })

      currentCode.push(currentLocation)
    })

    return currentCode.join('')
  }
}

type Location = { x: number, y: number }

const locationMap = {
  0: {
    0: 7,
    1: 4,
    2: 1,
  },
  1: {
    0: 8,
    1: 5,
    2: 2,
  },
  2: {
    0: 9,
    1: 6,
    2: 3,
  }
}

const locationTransitions = {
  '1': {
    'U': '1',
    'R': '1',
    'D': '3',
    'L': '1',
  },
  '2': {
    'U': '2',
    'R': '3',
    'D': '6',
    'L': '2',
  },
  '3': {
    'U': '1',
    'R': '4',
    'D': '7',
    'L': '2',
  },
  '4': {
    'U': '4',
    'R': '4',
    'D': '8',
    'L': '3',
  },
  '5': {
    'U': '5',
    'R': '6',
    'D': '5',
    'L': '5',
  },
  '6': {
    'U': '2',
    'R': '7',
    'D': 'A',
    'L': '5',
  },
  '7': {
    'U': '3',
    'R': '8',
    'D': 'B',
    'L': '6',
  },
  '8': {
    'U': '4',
    'R': '9',
    'D': 'C',
    'L': '7',
  },
  '9': {
    'U': '9',
    'R': '9',
    'D': '9',
    'L': '8',
  },
  'A': {
    'U': '6',
    'R': 'B',
    'D': 'A',
    'L': 'A',
  },
  'B': {
    'U': '7',
    'R': 'C',
    'D': 'D',
    'L': 'A',
  },
  'C': {
    'U': '8',
    'R': 'C',
    'D': 'C',
    'L': 'B',
  },
  'D': {
    'U': 'B',
    'R': 'D',
    'D': 'D',
    'L': 'D',
  },
}
