export class Wizard {
  public static readonly STATUS_BATTLING = 1
  public static readonly STATUS_VICTORIOUS = 2
  public static readonly STATUS_DEFEATED = 3

  public static readonly MAGIC_MISSILE_COST = 53
  public static readonly MAGIC_MISSILE_DAMAGE = 4
  public static readonly DRAIN_COST = 73
  public static readonly DRAIN_DAMAGE = 2
  public static readonly DRAIN_HEAL = 2
  public static readonly SHIELD_COST = 113
  public static readonly SHIELD_TURNS = 6
  public static readonly SHIELD_AMOUNT = 7
  public static readonly POISON_COST = 173
  public static readonly POISON_TURNS = 6
  public static readonly POISON_DAMAGE = 3
  public static readonly RECHARGE_COST = 229
  public static readonly RECHARGE_TURNS = 5
  public static readonly RECHARGE_AMOUNT = 101

  public boss: {
    hp: number,
    damage: number
  }
  public hp: number
  public mana: number
  public manaSpent: number
  public shieldTurns: number
  public poisonTurns: number
  public rechargeTurns: number

  public actions: string[]

  constructor(hp: number, mana: number, boss: {hp: number, damage: number}) {
    this.boss = boss

    this.hp = hp
    this.mana = mana
    this.manaSpent = 0

    this.shieldTurns = 0
    this.poisonTurns = 0
    this.rechargeTurns = 0

    this.actions = []
  }

  public clone() {
    const bossClone = {hp: this.boss.hp, damage: this.boss.damage}
    const clone = new Wizard(this.hp, this.mana, bossClone)
    clone.shieldTurns = this.shieldTurns
    clone.poisonTurns = this.poisonTurns
    clone.rechargeTurns = this.rechargeTurns
    clone.manaSpent = this.manaSpent
    clone.actions = this.actions

    return clone
  }

  public getFutureWizards(maximumManaSpent: number | null) {
    if (this.getBattleStatus() !== Wizard.STATUS_BATTLING) {
      return []
    }
    const possibleActions = this.getPossibleActions()

    const futureWizards = []

    possibleActions.forEach(action => {
      const futureWizard = this.clone()
      futureWizard.performAction(action)
      futureWizards.push(futureWizard)
    })

    if (maximumManaSpent !== null) {
      const validWizards = futureWizards.filter(wizard => wizard.manaSpent < maximumManaSpent)
      //return shuffleArray(validWizards)
      return (validWizards)
    } else {
      //return shuffleArray(futureWizards)
      return (futureWizards)
    }
  }

  public getBattleStatus() {
    if (this.hp < 0) {
      return Wizard.STATUS_DEFEATED
    } else if (this.boss.hp < 0) {
      return Wizard.STATUS_VICTORIOUS
    } else {
      return Wizard.STATUS_BATTLING
    }
  }

  public beginWizardTurn() {
    this.applyEffects()
    this.decreaseEffectTurns()
  }

  public beginBossTurn() {
    this.applyEffects()
    this.decreaseEffectTurns()
  }

  public bossAttack() {
    const playerShield = this.shieldTurns > 0 ? Wizard.SHIELD_AMOUNT : 0
    this.hp -= Math.max(this.boss.damage - playerShield, 1)
  }

  public getPossibleActions() {
    const possibleActions = []

    if (this.mana >= Wizard.MAGIC_MISSILE_COST) {
      possibleActions.push('magic_missile')
    }
    if (this.mana >= Wizard.DRAIN_COST) { 
      possibleActions.push('drain')
    }
    if (this.mana >= Wizard.SHIELD_COST && this.shieldTurns === 0) {
      possibleActions.push('shield')
    }
    if (this.mana >= Wizard.POISON_COST && this.poisonTurns === 0) {
      possibleActions.push('poison')
    }
    if (this.mana >= Wizard.RECHARGE_COST && this.rechargeTurns === 0) {
      possibleActions.push('recharge')
    }

    return possibleActions
  }

  public performAction(actionString: string) {
    switch(actionString) {
      case 'magic_missile': {
        this.magicMissile()
        break;
      }
      case 'drain': {
        this.drain()
        break;
      }
      case 'shield': {
        this.shield()
        break;
      }
      case 'poison': {
        this.poison()
        break;
      }
      case 'recharge': {
        this.recharge()
        break;
      }
      default: {
        throw(`invalid action given: ${actionString}`)
      }
    }

    this.actions.push(actionString)
  }

  private applyEffects() {
    if (this.poisonTurns > 0) {
      this.boss.hp -= Wizard.POISON_DAMAGE
    }
    if (this.rechargeTurns > 0) {
      this.mana += Wizard.RECHARGE_AMOUNT
    }
  }

  private decreaseEffectTurns() {
    this.shieldTurns = Math.max(this.shieldTurns - 1, 0)
    this.poisonTurns = Math.max(this.poisonTurns - 1, 0)
    this.rechargeTurns = Math.max(this.rechargeTurns - 1, 0)
  }

  public magicMissile() {
    if (this.mana < Wizard.MAGIC_MISSILE_COST) {
      throw('Insufficient mana to cast magic missile')
    } else {
      this.mana -= Wizard.MAGIC_MISSILE_COST
      this.manaSpent += Wizard.MAGIC_MISSILE_COST
      this.boss.hp -= Wizard.MAGIC_MISSILE_DAMAGE
    }
  }

  public drain() {
    if (this.mana < Wizard.DRAIN_COST) {
      throw('Insufficient mana to cast drain')
    } else {
      this.mana -= Wizard.DRAIN_COST
      this.manaSpent += Wizard.DRAIN_COST
      this.boss.hp -= Wizard.DRAIN_DAMAGE
      this.hp += Wizard.DRAIN_HEAL
    }
  }

  public shield() {
    if (this.mana < Wizard.SHIELD_COST) {
      throw('Insufficient mana to cast shield') 
    } else if (this.shieldTurns > 0) {
      throw('Cannot stack shield effect')
    } else {
      this.mana -= Wizard.SHIELD_COST
      this.manaSpent += Wizard.SHIELD_COST
      this.shieldTurns += Wizard.SHIELD_TURNS
    }
  }

  public poison() {
    if (this.mana < Wizard.POISON_COST) {
      throw('Insufficient mana to cast poison') 
    } else if (this.poisonTurns > 0) {
      throw('Cannot stack poison effect')
    } else {
      this.mana -= Wizard.POISON_COST
      this.manaSpent += Wizard.POISON_COST
      this.poisonTurns += Wizard.POISON_TURNS
    }
  }
  public recharge() {
    if (this.mana < Wizard.RECHARGE_COST) {
      throw('Insufficient mana to cast recharge') 
    } else if (this.rechargeTurns > 0) {
      throw('Cannot stack recharge effect')
    } else {
      this.mana -= Wizard.RECHARGE_COST
      this.manaSpent += Wizard.RECHARGE_COST
      this.rechargeTurns += Wizard.RECHARGE_TURNS
    }
  }
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}
