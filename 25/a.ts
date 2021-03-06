import { SnowCodeGenerator } from '../models/snowCodeGenerator'
const firstNumber = 20151125
const row = 2981
const column = 3075

const snowCodeGenerator = new SnowCodeGenerator(firstNumber, row, column)
const result = snowCodeGenerator.getCode()

console.log(result)
