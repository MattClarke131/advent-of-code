type Instruction = {
  turn: string,
  steps: number
}

type Point = {
  x: number,
  y: number,
}

type Segment = {
  start: Point,
  end: Point
}

const dir = {
  L: 0,
  U: 1,
  R: 2,
  D: 3,
}

export default class GridTraveler {
  private instructions: Instruction[]
  private direction: number
  private x: number
  private y: number

  constructor(inputArray: string[]) {
    this.instructions = this.parseInputArray(inputArray)
    this.x = 0
    this.y = 0
    this.direction = dir['U']
  }

  private parseInputArray(inputArray: string[]) : Instruction[] {
    return inputArray.map( instruction => {
      return {
        turn: instruction.substring(0,1),
        steps: parseInt(instruction.substring(1))
      }
    })
  }

  private performInstructions() {
    this.instructions.forEach( instruction => this.performInstruction(instruction))
  }

  private performInstruction(instruction) {
    this.direction = this.getNextDirection(instruction.turn, this.direction)
    const nextTurningPoint = this.getNextTurningPoint(
      this.direction,
      instruction.steps,
      {x: this.x, y: this.y}
    )

    this.x = nextTurningPoint.x
    this.y = nextTurningPoint.y
  }

  private getNextDirection(turn, direction) {
    let newDirection = direction + (turn === 'R' ? 5 : 3)
    newDirection = newDirection % 4

    return newDirection
  }

  private getNextTurningPoint(direction, steps, startPoint) {
    switch (direction) {
      case dir['L']:
        return {
          x: startPoint.x - steps,
          y: startPoint.y,
        }
      case dir['U']:
        return {
          x: startPoint.x,
          y: startPoint.y + steps,
        }
      case dir['R']:
        return {
          x: startPoint.x + steps,
          y: startPoint.y,
        }
      case dir['D']:
        return {
          x: startPoint.x,
          y: startPoint.y - steps,
        }
    }
  }

  public getFinalDistance() {
    this.x = 0
    this.y = 0
    this.performInstructions()
    return Math.abs(this.x) + Math.abs(this.y)
  }

  public getFirstDoubleLocationDistance() : number {
    let currentPoint = {
      x: 0,
      y: 0,
    }
    let currentDirection = dir['U']
    const travelledSegments = []

    for (let i=0; i<this.instructions.length; i++) {
      const instruction = this.instructions[i]
      const nextSegment = this.generateNextSegment(instruction, currentDirection, currentPoint)
      currentPoint = nextSegment.end
      currentDirection = this.getNextDirection(instruction.turn, currentDirection)

      const intersectingPoint = this.getIntersectingPoint(travelledSegments, nextSegment)
      if (intersectingPoint !== null) {
        return Math.abs(intersectingPoint.x) + Math.abs(intersectingPoint.y)
      }

      travelledSegments.push(nextSegment)
    }

    return 0
  }

  private generateNextSegment(instruction: Instruction, currentDirection, startPoint) : Segment {
    const nextDirection = this.getNextDirection(instruction.turn, currentDirection)
    const endPoint = this.getNextTurningPoint(nextDirection, instruction.steps, startPoint)
    return {
      start: startPoint,
      end: endPoint,
    }
  }

  private getIntersectingPoint(
    travelledSegments: Segment[],
    currentSegment: Segment
  ) : Point | null {
    // The intersection formula will count the turning point as an intersection.
    // We do not test to most recent segment to ignore this point.
    for (let i=0; i<travelledSegments.length-1; i++) {
      const segment = travelledSegments[i]
      if (this.segmentsIntersect(segment, currentSegment)) {
        const intersectingPoint = this.getFirstIntersectingPoint(currentSegment, segment)
        return intersectingPoint
      }
    }

    return null
  }

  private segmentsIntersect(segmentA, segmentB) : boolean {
    return (
      (
        this.numberInRange(segmentA.start.x, segmentB.start.x, segmentB.end.x)
        && this.numberInRange(segmentB.start.y, segmentA.start.y, segmentA.end.y)
      )
      || (
        this.numberInRange(segmentA.start.y, segmentB.start.y, segmentB.end.y)
        && this.numberInRange(segmentB.start.x, segmentA.start.x, segmentA.end.x)
      )
    )
  }

  private numberInRange(n, a, b) {
    return (n >= a && n <= b) || (n <= a && n >= b)
  }

  private getFirstIntersectingPoint(currentSegment, segment) : Point {
    if (currentSegment.start.x > currentSegment.end.x) {
      for (let x=currentSegment.start.x; x >= currentSegment.end.x; x--) {
        if (this.numberInRange(x, segment.start.x, segment.end.x)) {
          return {
            x,
            y: currentSegment.start.y,
          }
        }
      }
    } else if (currentSegment.start.x < currentSegment.end.x) {
      for (let x=currentSegment.start.x; x <= currentSegment.end.x; x++) {
        if (this.numberInRange(x, segment.start.x, segment.end.x)) {
          return {
            x,
            y: currentSegment.start.y,
          }
        }
      }
    } else if (currentSegment.start.y > currentSegment.end.y) {
      for (let y=currentSegment.start.y; y >= currentSegment.end.y; y--) {
        if (this.numberInRange(y, segment.start.y, segment.end.y)) {
          return {
            x: currentSegment.start.x,
            y,
          }
        }
      }
    } else if (currentSegment.start.y < currentSegment.end.y) {
      for (let y=currentSegment.start.y; y <= currentSegment.end.y; y++) {
        if (this.numberInRange(y, segment.start.y, segment.end.y)) {
          return {
            x: currentSegment.start.x,
            y,
          }
        }
      }
    } else {
      throw('getFirstIntersectingPoint() should only be called if there is an intersecting point')
    }
  }
}
