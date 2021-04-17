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

let bags = []

const getBagFromBagRuleByColor = (color) => {
  return bagRules.filter(bag => bag.bagColor === color)[0]
}


const bags = bagRules.map( bag => {
  return {
    bagColor: bag.bagColor,
    contents: bag.contents.map( childBag => {
      return {
        amount: childBag.amount,
        bag: getBagFromBagRuleByColor(childBag.bagColor)
      }
    })
  }
})

const getBag = (color) => {
  return bags.filter( bag => bag.bagColor === color)[0]
}


const shinyGoldBag = getBag('shiny gold')
console.log(shinyGoldBag.contents[0].bag)

// bagRules = 
// 
// const parentBagContentsIncludeColor = (parentBag, bagColor) => {
//   return parentBag.contents.map(childBag => childBag.bagColor).includes(bagColor)
// }
// 
// const getBagsThatContain = (bagColor) => {
//   return bagRules.filter(bag => parentBagContentsIncludeColor(bag, bagColor))
// }
// 
// const getBagsInBagTree = (bagColor, memo = []) => {
//   parentBags = getBagsThatContain(bagColor)
// 
//   return parentBags.concat(parentBags.reduce((acc, cur) => acc.concat(getBagsInBagTree(cur.bagColor)), []))
// }
// 
// const getUniqueElements = (arr) => {
//   return arr.filter((el, idx) => arr.indexOf(el) === idx)
// }
// 
// const getTotalBagsInside = (parentBag) => {
//   const childBags = parentBag.contents.map(childBag => getBagFromBagRuleByColor(childBag.bagColor))
//   currentTotal =  parentBag
//     .contents
//     .map(
//       childBag => childBag.amount * getTotalBagsInside(getBagFromBagRuleByColor(childBag.bagColor))
//     )
//     //.reduce((acc, cur) => acc + cur, 0) + childBags.reduce( (acc, cur) => acc + cur.amount,0)
// 
//   console.log(currentTotal)
//   return currentTotal
// }
// 
// const shinyGoldBag = getBagFromBagRuleByColor('shiny gold')
// console.log(getTotalBagsInside(shinyGoldBag))
