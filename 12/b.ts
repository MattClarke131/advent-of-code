import * as fs from 'fs';
import * as path from 'path';
import { AccountingBook } from '../models/accountingBook'

const pathName: string = path.join(__dirname, './input.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');

const accountingBook = new AccountingBook(inputString)
console.log(accountingBook.getNonRedNumberSum())
