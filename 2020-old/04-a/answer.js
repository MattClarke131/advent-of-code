fs = require('fs')
input = fs.readFileSync('./input', 'utf8')
const rawPassports = input.split('\n\n').map(p=>p.replace(/\n/g, ' '))

const formatPassport = rawData => {
  const rawKeyValues = rawData.split(' ')

  let obj = {}
  rawKeyValues.forEach(s => {
    obj[s.slice(0,3)] = s.slice(4)
  })

  return obj
}

const passports = rawPassports.map(rawData => formatPassport(rawData))

const passportIsValid = passport => {
  return (
    passport['byr'] !== undefined
    && passport['iyr'] !== undefined
    && passport['eyr'] !== undefined
    && passport['hgt'] !== undefined
    && passport['hcl'] !== undefined
    && passport['ecl'] !== undefined
    && passport['pid'] !== undefined
  )
}

const total = passports.filter( p => passportIsValid(p) ).length

console.log(total)
