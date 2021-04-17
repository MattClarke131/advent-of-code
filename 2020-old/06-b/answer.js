const fs = require('fs')
input = fs.readFileSync('./input', 'utf8')

const intersection = (a, b) => {
  return a.filter(el => b.includes(el))
}

const groupAnswers = input
  .split('\n\n')
  .map(group => group
    .split('\n')
    .map(person => person.split(''))
    .filter(person => person.length > 0)
  )

const groupTotals = groupAnswers
  .map( group => group
    .reduce((acc, cur) => intersection(acc, cur))
    .length
  )

const total = groupTotals.reduce((acc,cur) => acc + cur)
console.log(total)
