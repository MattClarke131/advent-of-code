import { Wizard } from '../models/wizard'

const bossData = { hp: 58, damage: 9}
const WIZARD_HP = 50
const WIZARD_MANA = 500

let best = null

const baseWizard = new Wizard(WIZARD_HP, WIZARD_MANA, bossData)
const remainingWizards = [baseWizard]

const getNewBest = (wizard: Wizard, best) => {
  if (wizard.getBattleStatus() === Wizard.STATUS_VICTORIOUS) {
    if (best !== null) {
      return Math.min(wizard.manaSpent, best)
    } else {
      return wizard.manaSpent
    }
  }

  return best
}

const processWizard = (wizard: Wizard) => {
  best = getNewBest(wizard, best)

  if (wizard.getBattleStatus() === Wizard.STATUS_BATTLING) {
    wizard.beginBossTurn()
    best = getNewBest(wizard,best)

    wizard.bossAttack()
  }
}

const iterate = () => {
  // presumably this wizard has already been checked before
  const currentWizard = remainingWizards.shift()

  best = getNewBest(currentWizard, best)
  currentWizard.hp--
  currentWizard.beginWizardTurn()
  const futureWizards = currentWizard.getFutureWizards(best)

  futureWizards.forEach(wizard => { processWizard(wizard) })

  // add new wizards to be processed
  remainingWizards.unshift(...futureWizards)
}


while (remainingWizards.length > 0) {
  iterate()
}

console.log(best)
