import * as fs from 'fs';
import * as path from 'path';
import { LifeGrid } from '../models/lifeGrid'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const lifeGrid = new LifeGrid(inputString)
const steps = 100

console.log(lifeGrid.getLightsOnAfterSteps(steps))
