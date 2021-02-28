export class Cookie {
  public ingredients: {ingredient: CookieIngredient, amount: number}[]

  constructor(ingredients: {ingredient: CookieIngredient, amount: number}[]) {
    this.ingredients = ingredients
  }

  public calculateScore() {
    let scores = [
      this.getPropertyScore('capacity'),
      this.getPropertyScore('durability'),
      this.getPropertyScore('flavor'),
      this.getPropertyScore('texture'),
    ]
    scores = scores.map(score => Math.max(0,score))

    return scores.reduce((total, score) => total * score)
  }

  private getPropertyScore(property: string) {
    return this.ingredients.reduce(
      (total, ingredient) => {
        return total + ingredient.amount * ingredient.ingredient[property]
      },
      0
    )
  }

}

export class CookieIngredient {
  public name: string
  public capacity: number
  public durability: number
  public flavor: number
  public texture: number
  public calories: number

  static fromString(inputString: string) {
    const words = inputString.split(' ')

    return new CookieIngredient(
      words[0].substring(0,words[0].length -1),
      parseInt(words[2]),
      parseInt(words[4]),
      parseInt(words[6]),
      parseInt(words[8]),
      parseInt(words[10]),
    )
  }

  constructor(
    name: string,
    capacity: number,
    durability: number,
    flavor: number,
    texture: number,
    calories: number,

  ) {
    this.name = name
    this.capacity = capacity
    this.durability = durability
    this.flavor = flavor
    this.texture = texture
    this.calories = calories
  }
}

export class OptimalCookieGenerator {
  private ingredients: CookieIngredient[]
  private highScore: number

  constructor(ingredients: CookieIngredient[]) {
    this.ingredients = ingredients
    this.highScore = 0
  }

  public static fromString(instructions: string[]) : OptimalCookieGenerator{
    const ingredients = instructions.map(instruction => CookieIngredient.fromString(instruction))

    return new OptimalCookieGenerator(ingredients)
  }

  public getOptimalCookieScore() : number {
    let amountsPermutation = this.ingredients.map(i => 0)
    amountsPermutation[0] = 100
    this.highScore = this.getCookieScoreFromAmountsPermutation(amountsPermutation)
    let nextPermutation = this.getNextPermutation(amountsPermutation)
    let checked = 1

    while (!this.arraysEqual(amountsPermutation, nextPermutation)) {
      this.highScore = 
        Math.max(this.highScore, this.getCookieScoreFromAmountsPermutation(nextPermutation))
      amountsPermutation = nextPermutation
      nextPermutation = this.getNextPermutation(amountsPermutation)
      checked++
    }

    return this.highScore
  }

  private getCookieScoreFromAmountsPermutation(amountsPermutation: number[]) : number {
    const ingredients = amountsPermutation.map(
      (amount,i) => {
        return { ingredient: this.ingredients[i], amount }
      })

    const cookie = new Cookie(ingredients)

    return cookie.calculateScore()
  }

  private getNextPermutation(permutation: number[]) : number[] {
    if (permutation[permutation.length-1] === 100) {
      return permutation
    } else if (permutation.length === 2) {
      if (permutation[0] === 0) {
        return permutation
      } else {
        return [permutation[0]-1, permutation[1]+1]
      }
    } else {
      const subPermutation = permutation.slice(1)
      const nextSubPermutation = this.getNextPermutation(subPermutation)

      if (!this.arraysEqual(subPermutation, nextSubPermutation)) {
        return [permutation[0]].concat(nextSubPermutation)
      } else {
        if (permutation[0] === 0) {
          return permutation
        } else {
          let nextPermutation = permutation.map(p => 0)
          nextPermutation[0] = permutation[0]-1
          nextPermutation[1] = subPermutation.reduce((total, perm) => total + perm, 1)
          return nextPermutation
        }
      }
    }
  }

  private arraysEqual(a: any[], b: any[]) : boolean {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }

    return true
  }
}
