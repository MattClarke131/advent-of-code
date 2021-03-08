const FORBIDDEN_SUBSTRINGS = [
  'ab',
  'cd',
  'pq',
  'xy',
]

const VOWELS = ['a','e','i','o','u']

export class NiceCheck {
  input: string

  constructor(input: string) {
    this.input = input
  }

  public isNice() {
    return (
      this.containsThreeVowels()
      && this.containsADoubleLetter()
      && !this.containsAForbiddenString()
    )
  }

  public isNiceV2() {
    return (
      this.containsRepeatingTwoLetters()
      && this.containsSandwich()
    )
  }

  private containsSandwich() {
    for (let i=0; i<this.input.length-2; i++) {
      if (this.input[i] === this.input[i+2]) {
        return true
      }
    }

    return false
  }

  private containsRepeatingTwoLetters() {
    for (let i=0; i<this.input.length-3; i++) {
      for (let j=i+2; j<this.input.length-1; j++) {
        if (this.input.slice(i,i+2) === this.input.slice(j,j+2)) {
          return true
        }
      }
    }

    return false
  }

  private containsThreeVowels() {
    let count = 0
    for (let i=0; i<this.input.length; i++) {
      if (VOWELS.includes(this.input[i])) {
        count++
      }
    }

    return count >= 3
  }

  private containsADoubleLetter() {
    for (let i=0; i<this.input.length-1; i++) {
      if (this.input[i] === this.input[i+1]) {
        return true
      }
    }

    return false
  }

  private containsAForbiddenString() {
    for (let i=0; i<this.input.length-1; i++) {
      if (FORBIDDEN_SUBSTRINGS.includes(this.input.slice(i,i+2))) {
        return true
      }
    }

    return false
  }
}
