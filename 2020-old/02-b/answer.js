fs = require('fs')

input = fs.readFileSync('./input', 'utf8')

let rows = input.split('\n').filter(r => r !== '')

rows = rows.map(
  (row) => {
    const pieces = row.split(' ')

    return {
      'pos1': pieces[0].split('-')[0],
      'pos2': pieces[0].split('-')[1],
      'char': pieces[1][0],
      'password': pieces[2],
    }
  }
)

const passwordIsValid = (row) => {
  const firstMatch = row.password[row.pos1 -1] === row.char
  const secondMatch = row.password[row.pos2 -1] === row.char

  return firstMatch !== secondMatch
}

const numValidPasswords = rows.reduce(
  (acc, cur) => {
    return acc + (passwordIsValid(cur) ? 1 : 0)
  },
  0
)

console.log(numValidPasswords)
