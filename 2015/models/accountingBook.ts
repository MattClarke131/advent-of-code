export class AccountingBook {
  inputString: string
  json: object | []

  constructor(inputString: string) {
    this.inputString = inputString
    this.json = JSON.parse(inputString)
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

  public getNonRedNumberSum() {
    const nonRedJSON = this.getNonRedJSON(this.json)
    this.inputString = JSON.stringify(nonRedJSON)
    return this.getNumberSum()
  }

  public getNonRedJSON( json ) {
    if (Array.isArray(json)) {
      return json.map( el => this.getNonRedJSON(el) )
    } else if (typeof json === 'object') {
      if (Object.values(json).includes("red")) {
        return {}
      } else {
        let result = {}

        for (const key in json) {
          result[key] = this.getNonRedJSON(json[key])
        }

        return result
      }
    } else {
      return json
    }
  }
}
