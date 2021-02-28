export class EggnogCalculator {
  private containers: number[]

  constructor(containers) {
    this.containers = containers.sort((a,b) => b-a)
  }

  public getNumberOfPermutationsForAmount(liters) : number {
    let count = 0
    for (let i=0; i<Math.pow(2,this.containers.length); i++) {
      const currentPermutation = 
        i.toString(2)
        .padStart(this.containers.length, '0')
        .split('')
        .map(s => parseInt(s))

      if (this.dotProduct(this.containers,currentPermutation) === liters) {
        count++
      }
    }

    return count
  }

  private dotProduct(a, b) {
    const product = a.reduce(
      (memo, number, index) => {
        return memo + number * b[index]
      },
      0
    )

    return product
  }
}
