import DumbCell from './dumbCell';

class BehaviouralCell {
  constructor(x, y, cellState = null) {
    if (x < 0 || y < 0) {
      throw new Error(`Invalid coordinates: x=${x} y=${y}!`);
    }
    this.x = x;
    this.y = y;
    if (cellState === null) {
      cellState = DumbCell.createRandom();
    }
    this.cellState = cellState;
    this.neighbors = [];
  }

  equals(otherX, otherY) {
    return this.x === otherX && this.y === otherY;
  }

  equalsCell(otherCoordinate) {
    return otherCoordinate.equals(this.x, this.y);
  }

  isNeighbor(otherX, otherY) {
    if (this.equals(otherX, otherY)) {
      return false;
    }

    if (Math.abs(otherX - this.x) > 1) {
      return false;
    }

    if (Math.abs(otherY - this.y) > 1) {
      return false;
    }

    return true;
  }

  isNeighborCell(otherCoordinate) {
    return otherCoordinate.isNeighbor(this.x, this.y);
  }

  addNeighbor(cell) {
    this.neighbors.push(cell);
  }

  getNeighborsCount() {
    return this.neighbors.length;
  }

  isAlive() {
    return this.cellState.isAlive();
  }

  changesState() {
    let numberOfLiveNeighbors = 0;

    this.neighbors.forEach(cell => {
      if (cell.isAlive()) {
        numberOfLiveNeighbors += 1;
      }
    });

    return this.cellState.changesState(numberOfLiveNeighbors);
  }

  nextState() {
    if (this.isAlive()) {
      this.cellState = DumbCell.createDead();
    } else {
      this.cellState = DumbCell.createLive();
    }
  }
};

export default BehaviouralCell;
