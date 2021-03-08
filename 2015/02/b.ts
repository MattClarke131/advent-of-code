import * as fs from 'fs';
import * as path from 'path';
import { Box } from '../models/box'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const dimensionsArray = inputString.split('\n')
dimensionsArray.pop()

const total = dimensionsArray
  .map(dimensions => {
    const box = new Box(dimensions)
    return box.getRequiredRibbon()
  })
  .reduce((memo, num) => memo + num)

console.log(total)
