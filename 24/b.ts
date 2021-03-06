import * as fs from 'fs';
import * as path from 'path';
import { Sleigh } from '../models/sleigh'

const pathName: string = path.join(__dirname, './input.txt');
const inputStrings: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop()
const inputNumbers = inputStrings.map(s => parseInt(s))

const sleigh = new Sleigh(inputNumbers, 4)
const result = sleigh.getSmallestGroup()

console.log(result)
