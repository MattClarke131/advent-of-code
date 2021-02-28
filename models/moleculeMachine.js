"use strict";
exports.__esModule = true;
exports.MoleculeMachine = void 0;
var MoleculeMachine = /** @class */ (function () {
    function MoleculeMachine(replacements) {
        this.replacements = replacements.map(function (r) { return new Replacement(r); });
    }
    MoleculeMachine.prototype.getNumberOfDistinctMolecules = function (startingMolecule) {
        var _this = this;
        var startingMoleculeArray = this.getMoleculeArray(startingMolecule);
        var molecules = {};
        this.replacements.forEach(function (replacement) {
            var generatedMolecules = _this.getGeneratedMolecules(replacement, startingMoleculeArray);
            Object.assign(molecules, generatedMolecules);
        });
        return Object.keys(molecules).length;
    };
    MoleculeMachine.prototype.getMoleculeArray = function (moleculeString) {
        var molecules = [];
        var index = 0;
        var length = moleculeString.length;
        while (index < length) {
            if (index === length - 1) {
                molecules.push(moleculeString[index]);
                index++;
            }
            else if (moleculeString[index + 1] === (moleculeString[index + 1]).toLowerCase()) {
                molecules.push(moleculeString.substring(index, index + 2));
                index += 2;
            }
            else {
                molecules.push(moleculeString[index]);
                index++;
            }
        }
        return molecules;
    };
    MoleculeMachine.prototype.getGeneratedMolecules = function (replacement, startingMoleculeArray) {
        var molecules = {};
        for (var i = 0; i < startingMoleculeArray.length; i++) {
            if (startingMoleculeArray[i] === replacement.input) {
                var generatedMoleculeArray = startingMoleculeArray.slice();
                generatedMoleculeArray[i] = replacement.output;
                var generatedMolecule = generatedMoleculeArray.join('');
                molecules[generatedMolecule] = true;
            }
        }
        return molecules;
    };
    return MoleculeMachine;
}());
exports.MoleculeMachine = MoleculeMachine;
var Replacement = /** @class */ (function () {
    function Replacement(inputString) {
        var words = inputString.split(' ');
        this.input = words[0];
        this.output = words[2];
    }
    return Replacement;
}());
