const fs = require('fs')
input = fs.readFileSync('./input', 'utf8')

const groupAnswers = input
  .split('\n\n')
  .map(group => group
    .split('\n')
    .map(person => person.split(''))
  )

const groupTotals = groupAnswers
  .map(group => group
    .reduce((acc, cur) => acc.concat(cur))
    .filter((cur, idx, arr) => arr.indexOf(cur) === idx)
    .length
  )

const total = groupTotals.reduce((acc,cur) => acc + cur)

console.log(total)
