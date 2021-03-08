"use strict";
exports.__esModule = true;
var moleculeMachine_1 = require("./moleculeMachine");
var testReplacements = [
    'H => HO',
    'H => OH',
    'O => HH',
];
var testReplacementsWithLowerCase = [
    'H => HCi',
    'H => CiH',
    'Ci => HH',
];
describe('MoleculeMachine', function () {
    describe('getNumberOfDistinctMolecules(startingMolecule)', function () {
        test('HOH has 4 distinct molecules', function () {
            var startingMolecule = 'HOH';
            var moleculeMachine = new moleculeMachine_1.MoleculeMachine(testReplacements);
            var actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule);
            var expected = 4;
            expect(actual).toBe(expected);
        });
        test('HOHOHO has 7 distinct molecules', function () {
            var startingMolecule = 'HOHOHO';
            var moleculeMachine = new moleculeMachine_1.MoleculeMachine(testReplacements);
            var actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule);
            var expected = 7;
            expect(actual).toBe(expected);
        });
        test('HCiH has 4 distinct molecules', function () {
            var startingMolecule = 'HCiH';
            var moleculeMachine = new moleculeMachine_1.MoleculeMachine(testReplacementsWithLowerCase);
            var actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule);
            var expected = 4;
            expect(actual).toBe(expected);
        });
        test('HCiH has 7 distinct molecules', function () {
            var startingMolecule = 'HCiHCiHCi';
            var moleculeMachine = new moleculeMachine_1.MoleculeMachine(testReplacementsWithLowerCase);
            var actual = moleculeMachine.getNumberOfDistinctMolecules(startingMolecule);
            var expected = 7;
            expect(actual).toBe(expected);
        });
    });
});
