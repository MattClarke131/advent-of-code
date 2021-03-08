export class Box {
  height: number
  width: number
  depth: number
  sides: number[]
  surfaceArea: number
  requiredWrapping: number
  requiredRibbon: number
  volume: number

  constructor(dimensions: string) {
    this.parseDimensions(dimensions)
  }

  public getRequiredWrapping() {
    return this.requiredWrapping
  }

  public getRequiredRibbon() {
    return this.requiredRibbon
  }

  private parseDimensions(dimensions) {
    const dimensionsArray = dimensions
      .split('x')
      .map(str => parseInt(str))

    this.height = dimensionsArray[0]
    this.width  = dimensionsArray[1]
    this.depth  = dimensionsArray[2]

    this.volume = this.height * this.width * this.depth

    this.sides = [
      this.height * this.width,
      this.height * this.depth,
      this.width * this.depth,
    ]

    this.surfaceArea = 2 * this.sides.reduce((memo, side) => memo + side)

    this.requiredWrapping =
      this.surfaceArea +
      Math.min(...this.sides)

    this.requiredRibbon =
      2 *
      [this.height, this.width, this.depth]
      .sort((a,b) => a - b)
        .slice(0,2)
        .reduce((memo, dimension) => memo + dimension)
    + this.volume
  }
}
