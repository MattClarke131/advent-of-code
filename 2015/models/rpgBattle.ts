type FighterData = {
  hp: number,
  damage: number,
  armor: number,
}
export class RPGBattle {
  player: Fighter
  boss: Fighter

  constructor(player: Fighter, boss: Fighter) {
    this.player = player
    this.boss = boss
  }

  public static fromFighterData(playerData: FighterData, bossData: FighterData) : RPGBattle {
    const player = new Fighter(playerData)
    const boss = new Fighter(bossData)

    return new RPGBattle(player, boss)
  }

  public doesPlayerWin() : boolean {
    while (this.player.hp > 0 && this.boss.hp > 0) {
      // players turn
      this.boss.hp -= Math.max(1, this.player.getDamage() - this.boss.getArmor())
      if (this.boss.hp <= 0) {
        return true
      }

      // boss's turn
      this.player.hp -= Math.max(1, this.boss.getDamage() - this.player.getArmor())
      if (this.player.hp <= 0) {
        return false
      }
    }
  }

}

export class Fighter {
  public hp: number

  private baseHp: number
  private baseDamage: number
  private baseArmor: number

  private weapon: Item
  private armor: Item
  private rings: Item[]

  constructor(fighterData: FighterData = null) {
    this.rings = []
    this.hp = fighterData?.hp ?? 0
    this.baseHp = fighterData?.hp ?? 0
    this.baseDamage = fighterData?.damage ?? 0
    this.baseArmor = fighterData?.armor ?? 0
  }

  public getDamage() : number {
    return (
      this.baseDamage
      + (this.weapon?.damage ?? 0)
      + (this.armor?.damage ?? 0)
      + (this.rings ? this.rings.reduce((memo,ring) => memo + ring.damage, 0) : 0)
    )
  }

  public getArmor() : number {
    return (
      this.baseArmor
      + (this.weapon?.armor ?? 0)
      + (this.armor?.armor ?? 0)
      + (this.rings ? this.rings.reduce((memo,ring) => memo + ring.armor, 0) : 0)
    )
  }

  public getCost() : number {
    return (
      this.weapon.cost
      + this.armor.cost
      + this.rings.reduce((memo,ring) => memo + ring.cost, 0)
    )
  }

  public equip(item: Item) : void {
    switch (item.itemType) {
      case 'Weapon': {
        this.weapon = item
        break;
      }
      case 'Armor': {
        this.armor = item
        break;
      }
      case 'Ring': {
        this.rings.push(item)
        break;
      }
    }
  }
}

abstract class Item {
  public name: string
  public itemType: 'Weapon' | 'Armor' | 'Ring'
  public cost: number
  public damage: number
  public armor: number

  constructor(name, cost, damage, armor) {
    this.name = name
    this.cost = cost
    this.damage = damage
    this.armor = armor
  }
}

class Weapon extends Item {
  public itemType: 'Weapon'

  constructor(name, cost, damage, armor) {
    super(name, cost, damage, armor)
    this.itemType = 'Weapon'
  }
}

class Armor extends Item {
  public itemType: 'Armor'

  constructor(name, cost, damage, armor) {
    super(name, cost, damage, armor)
    this.itemType = 'Armor'
  }
}

class Ring extends Item {
  public itemType: 'Ring'

  constructor(name, cost, damage, armor) {
    super(name, cost, damage, armor)
    this.itemType = 'Ring'
  }
}

export class ItemShop {
  public weapons: Weapon[]
  public armors: Armor[]
  public rings: Ring[]

  constructor(weapons: Weapon[], armors: Armor[], rings: Ring[]) {
    this.weapons = weapons
    this.armors = armors.concat(new Armor('null', 0, 0, 0))
    this.rings = rings.concat(new Ring('null', 0, 0, 0))
  }

  public static fromString(inputString) : ItemShop {
    const sectionStrings = inputString.split('\n\n')
    const weapons = this.getSectionFromString(sectionStrings[0], Weapon)
    const armors = this.getSectionFromString(sectionStrings[1], Armor)
    const rings = this.getSectionFromString(sectionStrings[2], Ring)

    return new ItemShop(weapons, armors, rings)
  }

  private static getSectionFromString(sectionString, classType) {
    const rows = sectionString.split('\n')
    const itemStrings = rows.slice(1).map(i => i.replace(/\s+/g, ' ').split(' '))
    const items = itemStrings.map( i => {
      if (i[1][0] === '+') {
        return new classType(i[0] + ' ' + i[1], parseInt(i[2]), parseInt(i[3]), parseInt(i[4]))
      } else { 
        return new classType(i[0], parseInt(i[1]), parseInt(i[2]), parseInt(i[3]))
      }
    })
    
    return items
  }

  public getLoadouts() {
    const nullRing = this.rings.filter(ring => ring.name === 'null')[0]
    const loadouts = []

    for (let i=0; i<this.armors.length; i++) {
      for (let j=0; j<this.weapons.length; j++) {
        for (let k=0; k<this.rings.length; k++) {
          for (let l=k+1; l<this.rings.length; l++) {
            loadouts.push({
              armor: this.armors[i],
              weapon: this.weapons[j],
              ring1: this.rings[k],
              ring2: this.rings[l],
            })
          }
        }
        loadouts.push({
          armor: this.armors[i],
          weapon: this.weapons[j],
          ring1: nullRing,
          ring2: nullRing,
        })
      }
    }

    return loadouts
  }
}
