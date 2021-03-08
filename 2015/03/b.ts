import * as fs from 'fs';
import * as path from 'path';
import { HouseGrid } from '../models/houseGrid'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)

const houseGrid = new HouseGrid(formattedInputString, true)
console.log(houseGrid.getNumHousesWithAtLeastOnePresent())
