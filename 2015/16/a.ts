import * as fs from 'fs';
import * as path from 'path';
import { AuntSue } from '../models/auntSue'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const ticker = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}

const auntSues = inputString.map(str => new AuntSue(str))
const matchingSue = auntSues.find(sue => sue.matchesAnalysis(ticker))
console.log(matchingSue)
