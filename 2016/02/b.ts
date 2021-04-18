import FileParser from '../../fileparser'
import KeypadCalculator from '../models/keypadCalculator'

const fileParser = new FileParser('2016/02/input.txt')
const parsedInput = fileParser.getArrayFromMultiLine()

const keypadCalculator = new KeypadCalculator(parsedInput)
const code = keypadCalculator.getComplexCode()

console.log(code)
