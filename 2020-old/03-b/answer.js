fs = require('fs')
input = fs.readFileSync('./input', 'utf8')
const rows = input.split('\n')
const rowLength = rows[0].length
const treeChar = '#'

const trees = (rows, right, down) => {
  const total =  rows.filter((row, index) => {
    const treeCheckIndex = (right * index/down) % rowLength
    return ((index % down) === 0) && (row[treeCheckIndex] === treeChar)
  }).length

  return total
}

const total =
  trees(rows, 1, 1) * 
  trees(rows, 3, 1) * 
  trees(rows, 5, 1) * 
  trees(rows, 7, 1) * 
  trees(rows, 1, 2)

console.log(total)
