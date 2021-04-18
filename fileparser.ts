import * as fs from 'fs';
import * as path from 'path';

//const pathName: string = path.join(__dirname, './input.txt');
//const inputString: string = fs.readFileSync(pathName, 'utf-8');
//const dimensionsArray = inputString.split('\n')

export default class FileParser {
  public inputPath: string
  public inputString: string

  constructor(inputPath: string) {
    this.inputPath = inputPath
    const absolutePath = path.join(__dirname, inputPath)
    this.inputString = fs.readFileSync(absolutePath, 'utf-8')
  }

  getArrayFromSingleLine() : any[] {
    return this.inputString.split(', ').map(el => el.trim())
  }

  getArrayFromMultiLine() :any[] {
    return this.inputString
      .split('\n')
      .map(el => el.trim())
      .filter(el => el !== '')
  }
}
