import * as fs from 'fs';
import * as path from 'path';
import { Md5Calc } from '../models/md5Calc'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)

const md5Calc = new Md5Calc(formattedInputString)
const hash = md5Calc.getLowestHashWithNZeroes(5)

console.log(hash)
