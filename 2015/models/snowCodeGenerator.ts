export class SnowCodeGenerator {
  start: number
  row: number
  column: number

  constructor(start: number, row: number, column: number) {
    this.start = start
    this.row = row
    this.column = column
  }

  public getCode() {
    let iterations = this.getNumIterations()
    let result = this.start

    while (iterations > 0) {
      result = this.iterate(result)
      iterations--
    }

    return result
  }

  private getNumIterations() : number {
    return (
      this.triangle(this.column + this.row - 1)
      - this.row
    )
  }

  private triangle(n) : number { 
    return (n * (n+1)) / 2
  }

  private iterate(n) : number {
    return (n*252533)%33554393
  }
}
