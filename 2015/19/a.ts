import * as fs from 'fs';
import * as path from 'path';
import { MoleculeMachine } from '../models/moleculeMachine'

const pathName: string = path.join(__dirname, './input.txt');
const inputStrings: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop()

const replacements = inputStrings.slice(0,43)
const medicineMolecule = inputStrings[inputStrings.length-1]

const moleculeMachine = new MoleculeMachine(replacements)
const result = moleculeMachine.getNumberOfDistinctMolecules(medicineMolecule)

console.log(result)
