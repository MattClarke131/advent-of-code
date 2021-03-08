export class LookAndSay {
  input: string

  constructor(input: number) {
    this.input = input.toString()
  }

  public getNthNumber(n: number) {
    let result = this.input
    for (let i=0; i<n; i++) {
      result = this.getNextNumber(result)
    }

    return result
  }

  private getNextNumber(n: string) {
    const groupedDigits = this.getGroupedDigits(n)
    return this.getNumberFromGroupedDigits(groupedDigits)
  }

  private getGroupedDigits(n: string) {
    const digits = n.toString().split('')

    let i = 0,
      currentDigit = digits[0],
      groupedDigits = [digits[0]]

    while (i < digits.length - 1) {
      if (digits[i+1] === currentDigit) {
        groupedDigits[groupedDigits.length -1] += digits[i+1]
      } else {
        currentDigit = digits[i+1]
        groupedDigits.push(currentDigit)
      }

      i++
    }

    return groupedDigits
  }

  private getNumberFromGroupedDigits(digitGroups: string[]) {
    const groupObjects = digitGroups
      .map(group => { return {digit: group[0], amount: group.length} })
    const numberParts = groupObjects.map(obj => obj.amount.toString() + obj.digit)
    const numberString = numberParts.join('')

    return numberString
  }
}
