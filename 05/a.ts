import * as fs from 'fs';
import * as path from 'path';
import { NiceCheck } from '../models/niceCheck'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)
const stringList = formattedInputString.split('\n')

const total = stringList
  .reduce(
    (memo, str) => {
      console.log(str)
      const niceCheck = new NiceCheck(str)
      return niceCheck.isNice() ? memo + 1 : memo
    },
    0
  )

console.log(total)
