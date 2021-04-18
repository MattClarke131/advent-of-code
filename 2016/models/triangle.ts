export default class Triangle {
  public static getNumOfLegalTriangles(instructions: string[]) : number {
    return instructions.reduce(
      (memo, instruction) => { return memo + (this.isLegal(instruction) ? 1 : 0) },
      0
    )
  }
  public static isLegal(rawInstruction: string) {
    const sides = this.getTriangleSides(rawInstruction)
      .sort((a,b) => (a - b))

    return sides[0] + sides[1] > sides[2]
  }

  private static getTriangleSides(rawInstruction: string) : number[] {
    return rawInstruction
      .split(' ')
      .map(el => el.trim())
      .filter(el => el !== '')
      .map(el => parseInt(el))
  }
}
