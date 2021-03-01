// These are never used
// C => X
import * as fs from 'fs';
import * as path from 'path';
import { Molecule, MoleculeMachine } from '../models/moleculeMachine'

const pathName: string = path.join(__dirname, './input.txt');
const inputStrings: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop()

const replacements = inputStrings.slice(0,36)
const medicineMoleculeString = inputStrings[inputStrings.length-1]

const medicineMolecule = Molecule.fromString(medicineMoleculeString)

console.log('number of elements: ', medicineMolecule.elements.length)

const numberOfElements = medicineMolecule.elements.length
const numberOfYs = medicineMolecule.elements.reduce(
  (memo, element) => {
    return memo + ((element.name === 'Y') ? 1 : 0)
  },
  0
)
console.log('number of Ys: ', numberOfYs)

const numberOfRns = medicineMolecule.elements.reduce(
  (memo, element) => {
    return memo + ((element.name === 'Rn') ? 1 : 0)
  },
  0
)
console.log('number of Rns: ', numberOfRns)

// there are three transformation sizes:
// 1 -> 2
// 1 -> 4
// 1 -> 6
// 1 -> 4 and 1 -> 6 all begin and start with Rn and Ar
// 1 -> includes Y
// Rn, Ar, and Y do not exist outside of these transformations
const totalTransformations = numberOfElements - numberOfRns*3 - numberOfYs*2 - 1

console.log(totalTransformations)
