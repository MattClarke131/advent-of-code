const fs = require('fs')
const input = fs.readFileSync('./input', 'utf8')
const inputLines = input.split('\n')

const getBagRuleFromLine  = (line) => {
  const bagColor = line.slice(0,line.indexOf(' bags'))
  const contentsString = line.slice(line.indexOf('contain ') + 'contain '.length)
  const contents = contentsString
    .split(', ')
    .map( string => {
      return {
        bagColor: string.slice(string.indexOf(' ') + 1, string.indexOf(' bag')),
        amount: parseInt(
          string.slice(0, string.indexOf(' '))
        )
      }
    })
    .filter(bag => bag.bagColor !== 'other')

  return {
    bagColor,
    contentsString,
    contents,
  }
}

const bagRules = inputLines
  .slice(0, inputLines.length - 1)
  .map(line => getBagRuleFromLine(line))

const getBagByColor = (color) => {
  return bagRules.filter(bag => bag.bagColor === color)[0]
}

const parentBagContentsIncludeColor = (parentBag, bagColor) => {
  return parentBag.contents.map(childBag => childBag.bagColor).includes(bagColor)
}

const getBagsThatContain = (bagColor) => {
  return bagRules.filter(bag => parentBagContentsIncludeColor(bag, bagColor))
}

const getBagsInBagTree = (bagColor, memo = []) => {
  parentBags = getBagsThatContain(bagColor)

  return parentBags.concat(parentBags.reduce((acc, cur) => acc.concat(getBagsInBagTree(cur.bagColor)), []))
}

const getUniqueElements = (arr) => {
  return arr.filter((el, idx) => arr.indexOf(el) === idx)
}

console.log(getUniqueElements(getBagsInBagTree('shiny gold')).length)
