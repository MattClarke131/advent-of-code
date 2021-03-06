import * as fs from 'fs';
import * as path from 'path';
import { Computer, Program } from '../models/computer'

const pathName: string = path.join(__dirname, './input.txt');
const inputStrings: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop()

const program = new Program(inputStrings)
const computer = new Computer()
computer.runProgram(program)
console.log(computer.getB())
