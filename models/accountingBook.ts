export class AccountingBook {
    inputString: string

  constructor(inputString: string) {
    this.inputString = inputString
  }

  public getNumberSum() {
    let total = 0
    for (let i=0; i<this.inputString.length; i++) {
      const character = this.inputString[i]
      if (this.charIsNumber(character)) {
        const currentNumber = this.getNumber(this.inputString, i)
        total += currentNumber
        i+= currentNumber.toString().length -1
      }
    }

    return total
  }

  private charIsNumber(character: string) {
    const charCode = character.charCodeAt(0)

    return charCode >= 48 && charCode <= 57
  }

  private getNumber(inputString: string, index: number) {
    const numberIsNegative = inputString[index-1] === '-'
    let newNumber = inputString[index].slice()

    for (let i=index+1; i<inputString.length && this.charIsNumber(inputString[i]); i++) {
      newNumber = newNumber.concat(inputString[i])
    }

    return Number(newNumber) * (numberIsNegative ? -1 : 1)
  }
}
