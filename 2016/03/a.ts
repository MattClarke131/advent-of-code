import FileParser from '../../fileparser'
import Triangle from '../models/triangle'

const fileParser = new FileParser('2016/03/input.txt')
const parsedInput = fileParser.getArrayFromMultiLine()

const legalTriangles = Triangle.getNumOfLegalTriangles(parsedInput)
console.log(legalTriangles)
