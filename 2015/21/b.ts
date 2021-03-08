import * as fs from 'fs';
import * as path from 'path';
import { Fighter, RPGBattle, ItemShop } from '../models/rpgBattle'

const pathName: string = path.join(__dirname, './input.txt');
let inputString: string = fs.readFileSync(pathName, 'utf-8')
inputString = inputString.substring(0,inputString.length-1)

const bossData = { hp: 103, damage: 9, armor: 2 }
const itemShop = ItemShop.fromString(inputString)

const getRingPairs = (rings) => {
  const nullRing = rings.filter(ring => ring.name === 'null')
  const pairs = []
  pairs.push([nullRing, nullRing])

  for (let i=0; i<rings.length; i++) {
    for (let j=i+1; j<rings.length; j++) {
      pairs.push([rings[i], rings[j]])
    }
  }

  return pairs
}

const getLeastEfficientLoadoutCost = (bossData, itemShop) => {
  let worst = 0
  const loadouts = itemShop.getLoadouts()
  let i = 0

  while (i<loadouts.length) {
    const loadout = loadouts[i]
    const loadoutCost = (
      loadout['armor']['cost']
      + loadout['weapon']['cost']
      + loadout['ring1']['cost']
      + loadout['ring2']['cost']
    )

    if (loadoutCost > worst) {
      const player = new Fighter()
      player.hp = 100
      player.equip(loadout['armor'])
      player.equip(loadout['weapon'])
      player.equip(loadout['ring1'])
      player.equip(loadout['ring2'])

      const boss = new Fighter(bossData)
      const rpgBattle = new RPGBattle(player, boss)
      if (!rpgBattle.doesPlayerWin()) {
        worst = loadoutCost
      }
    }

    i++
  }

  return worst
}

console.log(getLeastEfficientLoadoutCost(bossData, itemShop))
