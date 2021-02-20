import * as fs from 'fs';
import * as path from 'path';
import { AppartmentDirection, AppartmentDirectionParser } from  '../models/appartmentDirectionParser'

const pathName: string = path.join(__dirname, './input.txt');
const input: string = fs.readFileSync(pathName, 'utf-8');

const parser = new AppartmentDirectionParser(input)
console.log(parser.getFloor())
