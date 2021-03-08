"use strict";
exports.__esModule = true;
// These are never used
// C => X
var fs = require("fs");
var path = require("path");
var moleculeMachine_1 = require("../models/moleculeMachine");
var pathName = path.join(__dirname, './input.txt');
var inputStrings = fs.readFileSync(pathName, 'utf-8').split('\n');
inputStrings.pop();
var replacements = inputStrings.slice(0, 36);
var medicineMoleculeString = inputStrings[inputStrings.length - 1];
var medicineMolecule = moleculeMachine_1.Molecule.fromString(medicineMoleculeString);
console.log('number of elements: ', medicineMolecule.elements.length);
var numberOfElements = medicineMolecule.elements.length;
var numberOfYs = medicineMolecule.elements.reduce(function (memo, element) {
    return memo + ((element.name === 'Y') ? 1 : 0);
}, 0);
console.log('number of Ys: ', numberOfYs);
var numberOfRns = medicineMolecule.elements.reduce(function (memo, element) {
    return memo + ((element.name === 'Rn') ? 1 : 0);
}, 0);
console.log('number of Rns: ', numberOfRns);
// there are three transformation sizes:
// 1 -> 2
// 1 -> 4
// 1 -> 6
// 1 -> 4 and 1 -> 6 all begin and start with Rn and Ar
// 1 -> includes Y
// Rn, Ar, and Y do not exist outside of these transformations
var totalTransformations = numberOfElements - numberOfRns * 3 - numberOfYs * 2 - 1;
console.log(totalTransformations);
