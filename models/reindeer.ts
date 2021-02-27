export class Reindeer {
  name: string
  speed: number
  endurance: number
  rest: number

  constructor(name: string, speed: number, endurance: number, rest: number) {
    this.name = name
    this.speed = speed
    this.endurance = endurance
    this.rest = rest
  }

  static fromString (inputString) {
    const words = inputString.split(' ')
    return new Reindeer(
      words[0], // name
      parseInt(words[3]), // speed
      parseInt(words[6]), // endurance
      parseInt(words[13]) // rest
    )
  }

  public getDistanceTravelled (time: number) : number {
    let remainingTime = time
    let distance = 0
    let isFlying = true

    while (remainingTime > 0) {
      if (isFlying) {
        if (remainingTime >= this.endurance) {
          distance += this.endurance * this.speed
          remainingTime -= this.endurance

        } else { // remaining Time < this.endurance
          distance += remainingTime * this.speed
          remainingTime = 0
        }
      } else { // !isFlying
        remainingTime -= this.rest
      }

      isFlying = !isFlying
    }

    return distance
  }
}

export class ReindeerInRace extends Reindeer {
  public points: number

  constructor(
    name: string,
    speed: number,
    endurance: number,
    rest: number,
  ) {
    super(name, speed, endurance, rest)

    this.points = 0
  }

  static fromString(inputString) {
    const words = inputString.split(' ')
    return new ReindeerInRace(
      words[0], // name
      parseInt(words[3]), // speed
      parseInt(words[6]), // endurance
      parseInt(words[13]) // rest
    )
  }
}
