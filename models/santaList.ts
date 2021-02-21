export class SantaList {
  list: string[]

  constructor(listData: string[]) {
    this.list = listData
  }

  public getDiff() {
    return this.getNumCodeChars() - this.getNumMemChars()
  }

  private getNumCodeChars() {
    return this.list.reduce((m,e) => m+e.length, 0)
  }

  private getNumMemChars() {
    return this.list.map(s => this.getMemLength(s)).reduce((m,e) => m+e)
  }

  private getMemLength = (s: string) => {
    let i = 0
    let total = 0

    while (i < s.length - 1) {
      if (s[i] === '\\') {
        if (s[i+1] === '\\') {
          total++
          i++
        } else if (s[i+1] === '"') {
          total++
          i++
        } else if (s[i+1] === 'x') {
          total+=3
          i+=3
        }
      }

      i++
    }

    return s.length - total - 2
  }
}
