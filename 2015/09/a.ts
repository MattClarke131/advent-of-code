import * as fs from 'fs';
import * as path from 'path';
import { RouteCalculator } from '../models/routeCalculator'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)
const stringList = formattedInputString.split('\n')

const routeCalculator = new RouteCalculator(stringList)

console.log(routeCalculator.calculateShortestRoute())
