export class SeatingArrangement {
  private happinessRules: string[]
  private attendees: object

  constructor(happinessRules: string[]) {
    this.happinessRules = happinessRules
    this.generateAttendees()
    this.populateAttendeesHappinessRules()
  }

  private generateAttendees() : void {
    this.attendees = {}

    this.happinessRules.forEach(
      rule => {
        const name = rule.split(' ')[0]
        const id = Object.keys(this.attendees).length
        this.attendees[name] ??= new Attendee(name, id)
      }
    )
  }

  private populateAttendeesHappinessRules() {
    this.happinessRules.forEach(
      rule => {
        const words = rule.split(' ')
        const subjectName = words[0]
        const polarity = words[2] === 'gain' ? 1 : -1
        const magnitude = parseInt(words[3])
        const targetName = words[10].slice(0, -1)

        this.attendees[subjectName].addHappinessRule(targetName, polarity * magnitude)
      }
    )
  }

  public getOptimalArrangementValue() : number {
    const attendeesArray = Object.keys(this.attendees).map(key => this.attendees[key])
    const sortedAttendeesArray = attendeesArray.sort((a,b) => a.id - b.id)
    const headOfTable = sortedAttendeesArray[0]

    // initial state
    let attendeesPermutation: any[] = sortedAttendeesArray.slice(1)
      .map(attendee => { return {attendee, value: attendee.id, direction: -1} })
    let currentMax = 0

    while (attendeesPermutation !== null) {
      currentMax = Math.max(currentMax, this.calcArrangementValue(headOfTable, attendeesPermutation))
      attendeesPermutation = this.getNextAttendeesPermutation(attendeesPermutation)
    }

    return currentMax
  }

  private calcArrangementValue(
    headOfTable: Attendee,
    permutation: object[]
  ) {
    const completeTable = permutation.concat({attendee: headOfTable})

    let total = 0
    for (let i=1; i<completeTable.length; i++) {
      total += this.getHappiness(completeTable[i-1], completeTable[i])
    }
    const firstPerson = completeTable[0]
    const lastPerson = completeTable[completeTable.length - 1]
    total += this.getHappiness(firstPerson, lastPerson)

    return total
  }

  private getHappiness(a: any, b: any) {
    return (
      a.attendee.happinessRules[b.attendee.name] 
      + b.attendee.happinessRules[a.attendee.name]
    )
  }

  private factorial(n: number) {
    return n === 1 ? n : n * this.factorial(n-1)
  }

  private getNextAttendeesPermutation(attendeesPermutation) {
    const mobileAttendees = this.getMobileAttendees(attendeesPermutation)
    if (mobileAttendees.length === 0) {
      return null
    }
    const greatestMobileAttendee = this.getGreatestMobileAttendee(mobileAttendees)
    const greatestMobileAttendeeIndex = attendeesPermutation
      .findIndex(attendee => attendee.value === greatestMobileAttendee.value)

    const targetIndex = greatestMobileAttendeeIndex + greatestMobileAttendee.direction

    const nextPermutation: any = this.swap(attendeesPermutation, greatestMobileAttendeeIndex, targetIndex)
    nextPermutation.forEach( attendee => {
      attendee.direction *= attendee.value > greatestMobileAttendee.value ? -1 : 1
    })

    return nextPermutation
  }

  private getMobileAttendees(attendeesPermutation) : any[] {
    return attendeesPermutation.filter( (attendee, index) => {
      const checkIndex = index + attendee.direction
      const checkAttendee = attendeesPermutation[checkIndex]
      return !!checkAttendee && attendee.value > checkAttendee.value
    })
  }

  private getGreatestMobileAttendee(mobileAttendees) {
    let greatestMobileAttendee = mobileAttendees[0]

    mobileAttendees.forEach(attendee => {
      if (attendee.value > greatestMobileAttendee.value) {
        greatestMobileAttendee = attendee
      }
    })

    return greatestMobileAttendee
  }

  private swap(array: object[], index1: number, index2: number) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
  }
}

class Attendee {
  public id: number
  public name: string
  public happinessRules: object

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
    this.happinessRules = {}
  }

  public addHappinessRule(name: string, happiness: number) {
    this.happinessRules[name] = happiness
  }
}
