import * as fs from 'fs';
import * as path from 'path';
import { SantaList } from '../models/santaList'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)
const stringList = formattedInputString.split('\n')

const santaList = new SantaList(stringList)
console.log(santaList.getDiff())
