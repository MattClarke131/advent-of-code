export class HouseGrid {
  houses: object

  constructor(inputString: string) {
    this.houses = {}
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
