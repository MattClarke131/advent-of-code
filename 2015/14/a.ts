import * as fs from 'fs';
import * as path from 'path';
import { Reindeer } from '../models/reindeer'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const reindeers = inputString.map(str => Reindeer.fromString(str))
const race = reindeers.map( reindeer => reindeer.getDistanceTravelled(2503) )

console.log(Math.max(...race))
