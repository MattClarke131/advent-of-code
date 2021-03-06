import { Combinatorics } from './combinatorics'
export class Sleigh {
  private readonly presents: number[]
  private readonly targetSum: number
  private bestEntanglement: number
  private readonly minSize: number
  private readonly maxSize: number

  constructor(presents: number[], numGroups: number) {
    const reverseSortedPresents = presents.sort((a,b) => b-a)
    this.presents = reverseSortedPresents
    this.targetSum = this.presents.reduce((memo, present) => memo + present) / numGroups
    this.bestEntanglement = 0
    this.minSize = this.calcMinSize(presents)
    this.maxSize = this.calcMaxSize(presents)
  }

  private calcMinSize(presents: number[]) : number {
    let total = 0
    const reverseSortedPresents = presents.sort((a,b) => b-a)
    for (let i=1; i<=presents.length; i++) {
      total += reverseSortedPresents[i]
      if (total >= this.targetSum) {
        return i
      }
    }

    return 0
  }

  private calcMaxSize(presents: number[]) : number {
    let total = 0
    const sortedPresents = presents.sort((a,b) => a-b)
    for (let i=1; i<=presents.length; i++) {
      total += sortedPresents[i]
      if (total >= this.targetSum) {
        return i
      }
    }

    return 0
  }

  public getSmallestGroup() : number {
    this.setSmallestGroup()

    return this.bestEntanglement
  }

  private setSmallestGroup() {
    const maxSize = this.maxSize
    let currentSize = this.minSize

    while (currentSize <= this.maxSize && this.bestEntanglement === 0) {
      this.setBestEntanglementBySize(currentSize)
      currentSize++
    }
  }

  private calcEntanglement(packages: number[]) : number {
    return packages.reduce((memo, pack) => memo * pack)
  }

  private setBestEntanglementBySize(size: number) {
    const setEntanglementIfValid = this.setEntanglementIfValid.bind(this)
    Combinatorics.iterateComboWithCallback(this.presents, size, setEntanglementIfValid)
  }

  private setEntanglementIfValid(combination: number[]) {
    if (!this.comboIsValidAmount(combination)) {
      return
    }

    const remainingPresents = this.presents.filter(p => !combination.includes(p))
    if (!this.canCreateOtherGroups(remainingPresents)) {
      return
    }

    if (this.bestEntanglement === 0) {
      this.bestEntanglement = this.calcEntanglement(combination)
    } else {
      this.bestEntanglement = Math.min(this.calcEntanglement(combination), this.bestEntanglement)
    }

    console.log(this.bestEntanglement)
  }

  private comboIsValidAmount(combo: number[]) : boolean {
    return combo.reduce((n,memo) => n+memo) === this.targetSum
  }

  private canCreateOtherGroups(remainingPackages: number[]) : boolean {
    let result = false
    let currentSize = this.minSize
    while (!result && currentSize <= remainingPackages.length-this.minSize) {
      const targetSum = this.targetSum
      const comboIsValidAmount = this.comboIsValidAmount.bind(this)
      const callback = (combo) => {
        if (comboIsValidAmount(combo)) { result = true }

      }

      Combinatorics.iterateComboWithCallback(remainingPackages, currentSize, callback)

      currentSize++
    }

    return result
  }
}
