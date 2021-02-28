export class LifeGrid {
  lifeGrid: object
  tempGrid: object
  size: number

  constructor(textConfiguration: string[]) {
    // assuming grid is a square
    this.size = textConfiguration.length

    this.populateGrids()
    this.applyConfigurationToLifeGrid(textConfiguration)
  }

  public getLightsOnAfterSteps(n: number) {
    this.iterate(n)
    return this.countOnLights()
  }

  private iterate(n: number) : void {
    for (let i=0; i<n; i++) {
      this.iterateOnce()
    }
  }

  private iterateOnce() : void {
    for (let i=0; i<this.size; i++) {
      for (let j=0; j<this.size; j++) {
        this.applyRulesToLight(i,j)
      }
    }

    this.applyTempGridToLifeGrid()
  }

  private applyRulesToLight(x: number, y: number) {
    if (this.lifeGrid[x][y]) {
      const numberOfOnNeighbors = this.getNumberOfOnNeighbors(x,y)
      this.tempGrid[x][y] = [2,3].includes(this.getNumberOfOnNeighbors(x,y))
    } else {
      this.tempGrid[x][y] = this.getNumberOfOnNeighbors(x,y) === 3
    }
  }

  private getNumberOfOnNeighbors(x,y) {
    let total = 0
    total += !!this.lifeGrid[x-1]?.[y-1] ? 1 : 0
    total += !!this.lifeGrid[x-1]?.[y] ? 1 : 0
    total += !!this.lifeGrid[x-1]?.[y+1] ? 1 : 0
    total += !!this.lifeGrid[x]?.[y-1] ? 1 : 0
    total += !!this.lifeGrid[x]?.[y+1] ? 1 : 0
    total += !!this.lifeGrid[x+1]?.[y-1] ? 1 : 0
    total += !!this.lifeGrid[x+1]?.[y] ? 1 : 0
    total += !!this.lifeGrid[x+1]?.[y+1] ? 1 : 0

    return total
  }

  private applyTempGridToLifeGrid() : void {
    for (let i=0; i<this.size; i++) {
      for (let j=0; j<this.size; j++) {
        this.lifeGrid[i][j] = this.tempGrid[i][j]
      }
    }
  }

  private countOnLights() : number {
    let total = 0
    for (let i=0; i<this.size; i++) {
      for (let j=0; j<this.size; j++) {
        total += this.lifeGrid[i][j] ? 1 : 0
      }
    }

    return total
  }

  private populateGrids() : void {
    this.lifeGrid = {}
    this.tempGrid = {}

    for (let i=0; i<this.size; i++) {
      this.lifeGrid[i] = {}
      this.tempGrid[i] = {}
      for (let j=0; j<this.size; j++) {
        this.lifeGrid[i][j] = 0
        this.tempGrid[i][j] = 0
      }
    }
  }

  private applyConfigurationToLifeGrid(textConfiguration: string[]) : void {
    for (let i=0; i<this.size; i++) {
      for (let j=0; j<this.size; j++) {
        this.lifeGrid[i][j] = textConfiguration[i][j] === '#'
      }
    }
  }

  private printGrid(grid: object) : void {
    let output = ''
    for (let i=0; i<this.size; i++) {
      let outputRow = ''
      for (let j=0; j<this.size; j++) {
        outputRow += grid[i][j] ? '#' : '.'
      }
      output += outputRow + '\n'
    }

    console.log(output)
  }
}
