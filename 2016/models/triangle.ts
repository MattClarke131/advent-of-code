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

  public static isNumberArrayLegal(numberArray: number[]) {
    const sides = numberArray.sort((a,b) => (a-b))

    return sides[0] + sides[1] > sides[2]
  }

  private static getTriangleSides(rawInstruction: string) : number[] {
    return rawInstruction
      .split(' ')
      .map(el => el.trim())
      .filter(el => el !== '')
      .map(el => parseInt(el))
  }

  public static getNumOfLegalVerticalTriangles(instructions: string[]) : number {
    const parsedInstructions = instructions.map(
      instruction => this.getTriangleSides(instruction)
    )
    let total = 0

    for (let i=0; i<parsedInstructions.length; i+=3) {
      if (this.isNumberArrayLegal(
        [
          parsedInstructions[i][0],
          parsedInstructions[i+1][0],
          parsedInstructions[i+2][0],
        ]
      )) {
        total++
      }
      if (this.isNumberArrayLegal(
        [
          parsedInstructions[i][1],
          parsedInstructions[i+1][1],
          parsedInstructions[i+2][1],
        ]
      )) {
        total++
      }
      if (this.isNumberArrayLegal(
        [
          parsedInstructions[i][2],
          parsedInstructions[i+1][2],
          parsedInstructions[i+2][2],
        ]
      )) {
        total++
      }
    }

    return total
  }
}
