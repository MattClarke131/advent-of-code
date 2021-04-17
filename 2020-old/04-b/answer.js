fs = require('fs')
input = fs.readFileSync('./test', 'utf8')
const rawPassports = input.split('\n\n').map(p=>p.replace(/\n/g, ' '))

const formatPassport = rawData => {
  const rawKeyValues = rawData.split(' ')

  let obj = {}
  rawKeyValues.forEach(s => {
    obj[s.slice(0,3)] = s.slice(4)
  })

  obj['byr'] = obj['byr'] === undefined ? undefined : parseInt(obj['byr'])
  obj['iyr'] = obj['iyr'] === undefined ? undefined : parseInt(obj['iyr'])
  obj['eyr'] = obj['eyr'] === undefined ? undefined : parseInt(obj['eyr'])
  obj['hgtUnit'] = obj['hgt'] === undefined ? undefined : obj['hgt'].slice(-2)
  obj['hgt'] = obj['hgt'] === undefined ? undefined : obj['hgt'].slice(0,-2)

  return obj
}

const passports = rawPassports.map(rawData => formatPassport(rawData))

const between = (x, min, max) => {
  return x >= min && x <= max
}

const all = (arr, callback) => {
  for(let i=0; i<arr.length; i++) {
    if(!callback(arr[i])) {
      return false
    }
  }

  return true
}

const passportIsValid = passport => {
  return (
    // Birth Year
    passport['byr'] !== undefined
      && between(passport['byr'], 1920, 2002)

    // Issue Year
    && passport['iyr'] !== undefined
      && between(passport['iyr'], 2010, 2020)

    // Expiration year
    && passport['eyr'] !== undefined
      && between(passport['eyr'], 2020, 2030)

    // Height
    && passport['hgt'] !== undefined
    && passport['hgtUnit'] !== undefined
    && (
      passport['hgtUnit'] === 'in' && between(passport['hgt'], 59, 76)
      || passport['hgtUnit'] === 'cm' && between(passport['hgt'], 150, 193)
    )

    // Hair Color
    && passport['hcl'] !== undefined
      && passport['hcl'].slice(0,1) === '#'
      && all(passport['hcl'].slice(1), (c) => { return '0123456789abcdef'.includes(c) })

    // Eye Color
    && passport['ecl'] !== undefined
      && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport['ecl'])

    // Passport Id
    && passport['pid'] !== undefined
      && passport['pid'].length === 9
      && all(passport['pid'], (c) => { return '0123456789'.includes(c)})
  )
}

const total = passports.filter( p => passportIsValid(p) ).length

console.log(passports.filter(p => !passportIsValid(p)))
console.log(total)
console.log(passports.length)
