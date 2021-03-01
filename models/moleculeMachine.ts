export class MoleculeMachine {
  private replacements: Replacement[]

  constructor(replacements: string[]) {
    this.replacements = replacements.map(r => new Replacement(r))
  }

  public getNumberOfDistinctMolecules(startingMolecule: string) : number {
    let startingMoleculeArray = this.getMoleculeArray(startingMolecule)
    let molecules = {}

    this.replacements.forEach(
      replacement => {
        const generatedMolecules = this.getGeneratedMolecules(replacement, startingMoleculeArray)
        Object.assign(molecules, generatedMolecules)
      }
    )

    return Object.keys(molecules).length
  }

  private getMoleculeArray(moleculeString: string) : string[] {
    let molecules = []
    let index = 0
    let length = moleculeString.length

    while (index < length) {
      if (index === length - 1) {
        molecules.push(moleculeString[index])
        index++
      } else if (moleculeString[index+1] === (moleculeString[index+1]).toLowerCase() ) {
        molecules.push(moleculeString.substring(index,index+2))
        index+=2
      } else {
        molecules.push(moleculeString[index])
        index++
      }
    }

    return molecules
  }

  private getGeneratedMolecules(replacement: Replacement, startingMoleculeArray: string[]) {
    let molecules = {}

    for (let i=0; i<startingMoleculeArray.length; i++) {
      if (startingMoleculeArray[i] === replacement.input) {
        const generatedMoleculeArray = startingMoleculeArray.slice()
        generatedMoleculeArray[i] = replacement.output
        const generatedMolecule = generatedMoleculeArray.join('')
        molecules[generatedMolecule] = true
      }
    }

    return molecules
  }
}

class Replacement {
  public input: string
  public output: string

  constructor(inputString: string) {
    const words = inputString.split(' ')
    this.input = words[0]
    this.output = words[2]
  }
}

class Element {
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

export class Molecule {
  public elements: Element[]

  constructor(elements: Element[]) {
    this.elements = elements
  }

  public static fromString(moleculeString: string) {
    const elements = this.getMoleculeArray(moleculeString)
    return new Molecule(elements)
  }

  private static getMoleculeArray(moleculeString: string) : Element[] {
    let str: string = moleculeString.slice()
    let elements: Element[] = []
    while (str.length > 0) {
      if (str.length === 1) {
        elements.push(new Element(str))
        str = ''
      } else if (str[1] === str[1].toLowerCase()) {
        elements.push(new Element(str.substring(0,2)))
        str = str.substring(2)
      } else {
        elements.push(new Element(str[0]))
        str = str.substring(1)
      }
    }

    return elements
  }
}
