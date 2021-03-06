export class Combinatorics {
  public static iterateComboWithCallback (array, choose, callback, chosenArray = []) : void {
    for (let i=0; i<array.length-choose+1; i++) {
      if (choose === 1) {
        const element = array[i]
        const combination = chosenArray.concat(element)
        callback(combination)
      } else {
        const subArray = array.slice(i+1)
        const newChoose = choose-1
        const element = array[i]
        const newChosenArray = chosenArray.concat(element)
        this.iterateComboWithCallback(subArray, newChoose, callback, newChosenArray)
      }
    }
  }
}
