import * as md5 from 'md5';

export class Md5Calc {
  secretKey: string

  constructor(secretKey: string) {
    this.secretKey = secretKey
  }

  public getLowestHashWithNZeroes(n: number) {
    let i = 0
    while(true) {
      const hash = this.getHash(i)
      if (this.hashStartsWithNZeroes(hash, n)) {
        return i
      }

      i++
    }
  }

  private getHash(input: number) {
    return md5(this.secretKey + input)
  }

  private hashStartsWithNZeroes(hash: string, n: number) {
    return hash.slice(0,n) === '0'.repeat(n)
  }
}
