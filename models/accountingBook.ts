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

  public getNonRedNumberSum() {
    let redIndex = this.inputString.indexOf('red')

    while(redIndex !== -1) {
      this.inputString = this.filterRedAndParentIfObject(redIndex)
      redIndex = this.inputString.indexOf('red')
    }


    return this.getNumberSum()
  }

  private filterRedAndParentIfObject(redIndex: number) {
    const parentOpenData : {charType: string, index: number} =
      this.getParentOpenData(redIndex)
    const parentCloseData : {charType: string, index: number} =
      this.getParentCloseData(redIndex)

    if (parentOpenData === null || parentCloseData === null ) {
      return this.inputString.replace('red', '')
    } else if (parentOpenData.charType === '[') {
      return this.inputString = this.inputString.replace('red', '')
    } else if (parentOpenData.charType === '{') {
      const beforeString = (this.inputString[parentOpenData.index-1] === ":") ?
        this.inputString.slice(0, Math.max(parentOpenData.index-4,0))
        : this.inputString.slice(0, parentOpenData.index)
      const afterString = this.inputString.slice(parentCloseData.index+2)
      return beforeString.concat(afterString)
    }
  }

  private getParentOpenData(redIndex: number) : {charType: string, index: number} | null {
    let bracketCount = 0
    let braceCount = 0

    for (let i=redIndex; i>=0; i--) {

      switch(this.inputString[i]) {
        case '[': {
          bracketCount++
          break
        }
        case ']': {
          bracketCount--
          break
        }
        case '{': {
          braceCount++
          break
        }
        case '}': {
          braceCount--
          break
        }
      }

      if (bracketCount === 1 && braceCount === 0) {
        return {
          charType: '[',
          index: i,
        }
      } else if (braceCount === 1 && bracketCount === 0) {
        return {
          charType: '{',
          index: i,
        }
      }
    }

    return null
  }

  private getParentCloseData(redIndex: number) : {charType: string, index: number} | null {
    let bracketCount = 0
    let braceCount = 0

    for (let i=redIndex; i<this.inputString.length; i++) {

      switch(this.inputString[i]) {
        case '[': {
          bracketCount++
          break
        }
        case ']': {
          bracketCount--
          break
        }
        case '{': {
          braceCount++
          break
        }
        case '}': {
          braceCount--
          break
        }
      }

      if (bracketCount === -1 && braceCount === 0) {
        return {
          charType: '[',
          index: i,
        }
      } else if (braceCount === -1 && bracketCount === 0) {
        return {
          charType: '{',
          index: i,
        }
      }
    }

    return null
  }
}
