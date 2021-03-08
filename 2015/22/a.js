"use strict";
exports.__esModule = true;
var wizard_1 = require("../models/wizard");
var bossData = { hp: 58, damage: 9 };
var WIZARD_HP = 50;
var WIZARD_MANA = 500;
var best = null;
var baseWizard = new wizard_1.Wizard(WIZARD_HP, WIZARD_MANA, bossData);
var remainingWizards = [baseWizard];
var getNewBest = function (wizard, best) {
    if (wizard.getBattleStatus() === wizard_1.Wizard.STATUS_VICTORIOUS) {
        if (best !== null) {
            return Math.min(wizard.manaSpent, best);
        }
        else {
            return wizard.manaSpent;
        }
    }
    return best;
};
var processWizard = function (wizard) {
    best = getNewBest(wizard, best);
    if (wizard.getBattleStatus() === wizard_1.Wizard.STATUS_BATTLING) {
        wizard.beginBossTurn();
        best = getNewBest(wizard, best);
        wizard.bossAttack();
    }
};
var iterate = function () {
    // presumably this wizard has already been checked before
    var currentWizard = remainingWizards.shift();
    best = getNewBest(currentWizard, best);
    currentWizard.beginWizardTurn();
    var futureWizards = currentWizard.getFutureWizards(best);
    futureWizards.forEach(function (wizard) { processWizard(wizard); });
    // add new wizards to be processed
    remainingWizards.unshift.apply(remainingWizards, futureWizards);
};
while (remainingWizards.length > 0) {
    iterate();
}
console.log(best);
