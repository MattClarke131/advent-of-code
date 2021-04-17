const fs = require('fs')
input = fs.readFileSync('./input', 'utf8')

const boardingPasses = input
  .split('\n')
  .map(p => { return {row: p.slice(0,7), col: p.slice(7)} })

boardingPasses.pop()

const getRowPart = (row) => {
  const binary = row.replace(/F/g,'0').replace(/B/g,'1')
  return parseInt(binary, 2)
}

const getColPart = (col) => {
  const binary = col.replace(/L/g,'0').replace(/R/g,'1')
  return parseInt(binary, 2)
}
const getSeatId = (pass) => {
  return 8*getRowPart(pass.row) + getColPart(pass.col)
}

const seatIds = boardingPasses.map(p => getSeatId(p))

const maxSeatId = seatIds.reduce((acc, cur) => { return Math.max(acc, cur) })

const sortedIds = seatIds.sort( (a,b) => a > b ? -1 : 1 )
const getMissingId = (sortedIds) => {
  for(let i=0; i<sortedIds.length-1; i++) {
    if(sortedIds[i] !== sortedIds[i+1]+1) {
      return sortedIds[i+1]+1
    }
  }
}

const missingId = getMissingId(sortedIds)

console.log(missingId)
