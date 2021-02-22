const A_CODE = 'a'.charCodeAt(0)
const FORBIDDEN_CHARS = ['i', 'o', 'l']
const FORBIDDEN_CHAR_CODES = FORBIDDEN_CHARS
  .map(character => character.charCodeAt(0) - A_CODE)

export class PasswordGenerator {
  constructor() {
  }

  public passwordIsValid(password: string) {
    const passwordAsCharCodes = this.encode(password)
    return this.passwordCodeIsValid(passwordAsCharCodes)
  }

  private passwordCodeIsValid(passwordAsCharCodes: number[]) {
    return (
      this.passwordContainsIncreasingStraight(passwordAsCharCodes)
      && ! this.passwordContainsForbiddenCharCodes(passwordAsCharCodes)
      && this.passwordContainsTwoPairsOfLetters(passwordAsCharCodes)
    )
  }

  private encode(password: string) : number[] {
    return password
      .split('')
      .map(character => character.charCodeAt(0) - A_CODE)
  }

  private decode(password: number[]) {
    return password
      .map(character => String.fromCharCode(character + A_CODE))
      .join('')
  }

  private passwordContainsIncreasingStraight(password: number[]) {
    for (let i=0; i<password.length - 2; i++) {
      if (this.codesAreIncreasing(password.slice(i,i+3))) {
        return true
      }
    }

    return false
  }

  private codesAreIncreasing(codes: number[]) {
    return (
      codes[0] === codes[1] - 1
      && codes[1] === codes[2] -1
    )
  }


  private passwordContainsForbiddenCharCodes(charCodes: number[]) {
    for (let i=0; i<charCodes.length; i++) {
      if(FORBIDDEN_CHAR_CODES.includes(charCodes[i])) {
        return true
      }
    }

    return false
  }

  private passwordContainsTwoPairsOfLetters(password) {
    let i = 0,
        numPairs = 0

    while (i < password.length - 1) {
      if (password[i] === password[i+1]) {
        numPairs++
        i+=2
      } else {
        i++
      }
    }

    return numPairs >= 2
  }

  public getNextPassword(password: string) {
    let currentTestPassword = password
      .slice()
      .split('')
      .map(character => character.charCodeAt(0) - A_CODE)
    let i =0

    do {
      currentTestPassword = this.getNextTestPassword(currentTestPassword)
      i++
    } while(!this.passwordCodeIsValid(currentTestPassword))

      return this.decode(currentTestPassword)
  }

  private getNextTestPassword(testPassword: number[]) {
    let nextPassword = testPassword.slice()

    if (this.passwordContainsForbiddenCharCodes(nextPassword)) {
      for (let i=nextPassword.length-1; i>=0; i--) {
        if (FORBIDDEN_CHAR_CODES.includes(nextPassword[i])) {
          nextPassword[i]++

          for (let j=i+1; j<nextPassword.length; j++) {
            nextPassword[j] = 0
          }

          return nextPassword
        }
      }
    }

    nextPassword[nextPassword.length -1]++
    for (let i=nextPassword.length-1; i>=0; i--) {
      // skip any forbidden characters
      if (FORBIDDEN_CHAR_CODES.includes(nextPassword[i])) {
        nextPassword[i]++
      }

      // rollover to next place
      if (nextPassword[i] >= 26) {
        if(i === 0) {
          throw('You have to implement creating new number places')
        }
        nextPassword[i] = 0
        nextPassword[i-1]++
      }
    }

    return nextPassword
  }
}
