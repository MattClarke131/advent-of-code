import * as fs from 'fs';
import * as path from 'path';
import { SantaList } from './santaList'

const pathName: string = path.join(__dirname, '../08/testinput.txt');
const inputString: string = fs.readFileSync(pathName, 'utf-8');
const formattedInputString = inputString.slice(0,inputString.length-1)
const testList = formattedInputString.split('\n')

describe('SantaList', () => {
  describe('getDiff', () => {
    test('should return 12', () => {
      // given
      const santaList = new SantaList(testList)

      //then
      const actual = santaList.getDiff()
      const expected = 12

      expect(actual).toBe(expected)
    })
  })
})
