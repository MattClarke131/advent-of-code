export type AppartmentDirection = '(' | ')'

export class AppartmentDirectionParser {
  private textDirections: string
  private floor: number
  private firstBasementFloor: number

  constructor(textDirections: string) {
    this.textDirections = textDirections
    this.firstBasementFloor = 0

    this.parse()
  }

  public getFloor() {
    return this.floor
  }

  public getFirstBasementFloor() {
    return this.firstBasementFloor
  }

  private parse() {
    let count: number = 0

    for (let i=0; i<this.textDirections.length; i++) {
      const currentDirection = this.textDirections[i]
      if (currentDirection === '(') {
        count++
      } else if (currentDirection === ')') {
        count--
      }

      if(this.firstBasementFloor === 0 && count < 0) {
        this.firstBasementFloor = i+1
      }
    }

    this.floor = count
  }
}
