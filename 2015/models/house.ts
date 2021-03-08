export class House {
  constructor() {
  }

  public firstHouseToReach(input: number) {
    let houseNumber = 1

    while (true) {
      const factors = this.getFactors(houseNumber)
      const numberOfPresents = 10 * factors.reduce((memo, presents) => memo + presents)
      if (numberOfPresents >= input) {
        return houseNumber
      }

      houseNumber++
    }
  }

  private getFactors(houseNumber: number) {
    const factors = []
    for (let i=1; i<=Math.sqrt(houseNumber); i++) {
      if (i === Math.sqrt(houseNumber) ) {
        factors.push(i)
        return factors
      } else if (houseNumber % i === 0) {
        factors.push(i)
        factors.push(houseNumber/i)
      }
    }

    return factors
  }

  public firstHouseToReachWithReasonableElves(input: number) {
    let houseNumber = 1

    while (true) {
      const factors = this.getReasonableFactors(houseNumber)
      const numberOfPresents = 11 * factors.reduce((memo, presents) => memo + presents)
      if (numberOfPresents >= input) {
        return houseNumber
      }

      houseNumber++
    }
  }

  private getReasonableFactors(houseNumber: number) {
    const factors = []
    for (let i = 1; i<=50; i++) {
      if (houseNumber % i === 0) {
        factors.push(houseNumber/i)
      }
    }

    return factors
  }
}
