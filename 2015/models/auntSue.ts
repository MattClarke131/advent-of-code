export class AuntSue {
  sueNumber: number
  rememberedThings: object

  constructor(rawInput) {
    const words = rawInput.split(' ')
    this.sueNumber = parseInt(
      words[1].substring(0,words[1].length-1)
    )

    this.rememberedThings = this.generateRememberedThings(rawInput)
  }

  private generateRememberedThings(rawInput) : object {
    const words = rawInput.split(' ').slice(2)
    let rememberedThings = {}
    for (let i=0; i<words.length-1; i+=2) {
      const key = words[i].substring(0,words[i].length-1)

      let value
      if (words[i+1].length === 1) {
        value = parseInt(words[i+1])
      } else {
        value = parseInt(
          words[i+1].substring(0,words[i+1].length-1)
        )
      }

      rememberedThings[key] = value
    }

    return rememberedThings
  }

  public matchesAnalysis(ticker: object) {
    const thingKeys = Object.keys(this.rememberedThings)

    for (let i=0; i<thingKeys.length; i++) {
      const rememberedThing = thingKeys[i]
      if (ticker[rememberedThing] !== this.rememberedThings[rememberedThing]) {
        return false
      }
    }

    return true
  }

  public matchesAnalysis2(ticker: object) {
    const thingKeys = Object.keys(this.rememberedThings)

    for (let i=0; i<thingKeys.length; i++) {
      const rememberedThing = thingKeys[i]
      switch (rememberedThing) {
        case 'cats': {
          if (ticker[rememberedThing] >= this.rememberedThings[rememberedThing]) {
            return false
          }
          break;
        }
        case 'trees': {
          if (ticker[rememberedThing] >= this.rememberedThings[rememberedThing]) {
            return false
          }
          break;
        }
        case 'pomeranians': {
          if (ticker[rememberedThing] <= this.rememberedThings[rememberedThing]) {
            return false
          }
          break;
        }
        case 'goldfish': {
          if (ticker[rememberedThing] <= this.rememberedThings[rememberedThing]) {
            return false
          }
          break;
        }
        default: {
          if (ticker[rememberedThing] !== this.rememberedThings[rememberedThing]) {
            return false
          }
        }
      }
    }

    return true
  }
}
