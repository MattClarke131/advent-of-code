import { PasswordGenerator } from '../models/passwordGenerator'
const input = 'hxbxxyzz'
const passwordGenerator = new PasswordGenerator()

console.log(passwordGenerator.getNextPassword(input))
