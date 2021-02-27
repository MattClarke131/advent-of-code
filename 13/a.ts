import * as fs from 'fs';
import * as path from 'path';
import { SeatingArrangement } from '../models/seatingArrangement'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

console.log(inputString)
const seatingArrangement = new SeatingArrangement(inputString)
console.log(seatingArrangement.getOptimalArrangementValue())
