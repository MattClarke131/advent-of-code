fs = require('fs')

input = fs.readFileSync('./input', 'utf8')

numbers = input.split('\n').map(s => parseInt(s))

parentloop:
for (let i=0; i<numbers.length-1; i++) {
  for (let j=i+1; j<numbers.length; j++) {
    if (numbers[i] + numbers[j] === 2020) {
      console.log(numbers[i]*numbers[j])
      break parentloop
    }
  }
}
