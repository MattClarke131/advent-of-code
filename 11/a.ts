import { PasswordGenerator } from '../models/passwordGenerator'
const input = 'hxbxwxba'
const passwordGenerator = new PasswordGenerator()

console.log(passwordGenerator.getNextPassword(input))
