fs = require('fs')

input = fs.readFileSync('./input', 'utf8')

let rows = input.split('\n').filter(r => r !== '')

rows = rows.map(
  (row) => {
    const pieces = row.split(' ')

    return {
      'min': pieces[0].split('-')[0],
      'max': pieces[0].split('-')[1],
      'char': pieces[1][0],
      'password': pieces[2],
    }
  }
)

const passwordIsValid = (row) => {
  const amountChar = row.password.split('').filter(c => c === row.char).length
  return amountChar >= row.min
         && amountChar <= row.max
}

const numValidPasswords = rows.reduce(
  (acc, cur) => {
    return acc + (passwordIsValid(cur) ? 1 : 0)
  },
  0
)

console.log(numValidPasswords)
