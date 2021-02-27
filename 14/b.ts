import * as fs from 'fs';
import * as path from 'path';
import { Reindeer, ReindeerInRace } from '../models/reindeer'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const reindeers = inputString.map(str => ReindeerInRace.fromString(str))

let currentSecond = 1

const runRace = (time) => {
  while(currentSecond <= 2503) {
    AddPointToWinningReindeer(reindeers, currentSecond)
    currentSecond++
  }
}

const AddPointToWinningReindeer = (reindeers, time) => {
  const winningReindeers = getWinningReindeers(reindeers, time)
  winningReindeers.forEach(reindeer => reindeer.points++)
}

const getWinningReindeers = (reindeers, time) => {
  const maxDistance = Math.max(
    ...reindeers.map(reindeer => reindeer.getDistanceTravelled(time))
  )
  const winningReindeers = reindeers.filter(
    reindeer => {
      return reindeer.getDistanceTravelled(time) === maxDistance
    }
  )

  return winningReindeers
}

runRace(2503)
const pointsEarned = reindeers.map(reindeer => reindeer.points)
console.log(Math.max(...pointsEarned))
