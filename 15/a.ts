import * as fs from 'fs';
import * as path from 'path';
import { OptimalCookieGenerator } from '../models/cookie'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string[] = fs.readFileSync(pathName, 'utf-8').split('\n');
inputString.pop()

const optimalCookieGenerator = OptimalCookieGenerator.fromString(inputString)
const highScore = optimalCookieGenerator.getOptimalCookieScore()

console.log(highScore)
