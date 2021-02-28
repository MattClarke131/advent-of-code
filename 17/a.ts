import * as fs from 'fs';
import * as path from 'path';
import { EggnogCalculator } from '../models/eggnogCalculator'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const eggnogCalculator = new EggnogCalculator(inputString)
const amount = 150
console.log(eggnogCalculator.getNumberOfPermutationsForAmount(amount))
