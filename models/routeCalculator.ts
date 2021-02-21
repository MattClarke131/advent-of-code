class LocationDistance {
  public startingLocation: string
  public endingLocation: string
  public distance: number

  constructor(locationDistanceString: string) {
    const words = locationDistanceString.split(' ')
    this.startingLocation = words[0]
    this.endingLocation = words[2]
    this.distance = parseInt(words[4])
  }
}

export class RouteCalculator {
  distances: LocationDistance[]
  locations: string[]

  constructor(rawDistancesArray: string[]) {
    this.distances = rawDistancesArray.map(d => new LocationDistance(d))
    this.locations = this.getLocations()
  }

  private getLocations() :string[] {
    const sources = this.distances.map(d => d.startingLocation)
    const destinations = this.distances.map(d => d.endingLocation)
    const locations = sources.concat(destinations)
    const uniqueLocations = locations.filter((l,i,a) => a.indexOf(l) === i)

    return uniqueLocations
  }

  public calculateShortestRoute() {
    const locationPermutations = this.getPermutations(this.locations)
    const distances = locationPermutations.map( l => this.getDistanceFromLocations(l) )

    return Math.min(...distances)
  }

  public calculateLongestRoute() {
    const locationPermutations = this.getPermutations(this.locations)
    const distances = locationPermutations.map( l => this.getDistanceFromLocations(l) )

    return Math.max(...distances)
  }

  private getPermutations(inputArray: any[]) {
    let permutation = inputArray.map(x => x),
        length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1,
        k,
        p

    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i]
        p = permutation[i]
        permutation[i] = permutation[k]
        permutation[k] = p
        c[i]++
        i = 1
        result.push(permutation.slice())
      } else {
        c[i] = 0
        i++
      }
    }

    return result
  }

  private getDistanceFromLocations(locations: string[]) {
    let total = 0
    for (let i=0; i<locations.length-1; i++) {
      total += this.getDistance(locations[i], locations[i+1])
    }

    return total
  }

  private getDistance(start: string, end: string) {
    for(let i=0; i<this.distances.length; i++) {
      if (
        (this.distances[i].startingLocation === start
        && this.distances[i].endingLocation === end)
        || (this.distances[i].startingLocation === end
        && this.distances[i].endingLocation === start)
      ) {
        return this.distances[i].distance
      }
    }

    throw('distance not found')
  }
}
