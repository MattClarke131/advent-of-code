import * as fs from 'fs';
import * as path from 'path';
import { Wire } from '../models/wire'
import { InstructionBooklet } from '../models/instructionBooklet'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)
const stringList = formattedInputString.split('\n')

const instructionBooklet = new InstructionBooklet(stringList)
const wireAInstruction = instructionBooklet.getInstructionFromIdentifier('a')
const wireA = new Wire(wireAInstruction, instructionBooklet)

const value = wireA.getOutput()

console.log(value)
