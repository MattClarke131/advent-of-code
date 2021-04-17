fs = require('fs')
input = fs.readFileSync('./input', 'utf8')
const rows = input.split('\n')
const rowLength = rows[0].length
const treeChar = '#'

const trees = rows.filter( (row, index) => {
  treeCheckIndex = (3 * index) % rowLength
  return row[treeCheckIndex] === treeChar
}).length

console.log(trees)
