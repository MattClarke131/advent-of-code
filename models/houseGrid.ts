export class HouseGrid {
  houses: object

  constructor(inputString: string, isRobotHelping: boolean = false) {
    this.houses = {}
    isRobotHelping ?
      this.visitAllHousesWithRoboSanta(inputString) :
      this.visitAllHouses(inputString)
  }

  public getNumHousesWithAtLeastOnePresent() {
    return this.getAllHouses().length
  }

  private getAllHouses() :House[] {
    return Object.values(this.houses)
      .reduce( (memo, row) => {
          return memo.concat(Object.values(row))
        },
        []
      )
  }

  private visitAllHouses(instructions: string) {
    let x = 0
    let y = 0
    let i = 0

    this.visitHouse(0,0)
    while (i < instructions.length) {

      const instruction = instructions[i]
      switch (instruction) {
        case '<': {
          x--
          break;
        }
        case '>': {
          x++
          break;
        }
        case '^': {
          y++
          break;
        }
        case 'v': {
          y--
          break;
        }
      }

      this.visitHouse(x,y)

      i++
    }
  }

  private visitAllHousesWithRoboSanta(instructions: string) {
    let santa = {
      x: 0,
      y: 0
    }
    let robot = {
      x: 0,
      y: 0
    }
    let i = 0

    this.visitHouse(0,0)
    while (i < instructions.length) {
      const instruction = instructions[i]

      switch (instruction) {
        case '<': {
          i % 2 === 0 ? santa.x-- : robot.x--
          break;
        }
        case '>': {
          i % 2 === 0 ? santa.x++ : robot.x++
          break;
        }
        case '^': {
          i % 2 === 0 ? santa.y++ : robot.y++
          break;
        }
        case 'v': {
          i % 2 === 0 ? santa.y-- : robot.y--
          break;
        }
      }

      i % 2 === 0 ?
        this.visitHouse(santa.x, santa.y) :
        this.visitHouse(robot.x,robot.y)

      i++
    }
  }

  private visitHouse(x: number, y: number) {
    if (!this.houses[x]) {
      const house = new House(x,y)
      const row = {[y]: house}
      this.houses[x] = row
    } else if (!this.houses[x][y]) {
      const house = new House(x,y)
      this.houses[x][y] = house
    } else {
      this.houses[x][y].visit()
    }
  }
}

class House {
  x: number
  y: number
  presents: number

  constructor(x, y) {
    this.x = x
    this.y = y
    this.presents = 1
  }

  public visit() {
    this.presents++
  }

  public getNumPresents() {
    return this.presents
  }
}
