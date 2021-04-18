import FileParser from '../../fileparser'
import GridTraveler from '../models/gridTraveler'

const fileParser = new FileParser('2016/01/input.txt')
const parsedInput = fileParser.getArrayFromSingleLine()

const gridTraveler = new GridTraveler(parsedInput)
const distance = gridTraveler.getFinalDistance()
console.log(distance)
