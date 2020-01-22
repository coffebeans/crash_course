import BehaviouralCell from './cell/behaviouralCell';
import DumbCell from './cell/dumbCell';

class Universe {
  constructor(columns = -1, rows = -1) {
    this.create(columns, rows);
  }

  create(columns = -1, rows = -1) {
    this.createCells(columns, rows);
    this.addNeighborsToCells();
  }

  createWithStateInfo(columns = -1, rows = -1, states = []) {
    // if (states.length)
    this.createCellsWithStateInfo(columns, rows, states);
    // else 
    // this.createCells(columns, rows);
    this.addNeighborsToCells();
  }

  createCells(columns, rows) {
    this.cells = [];
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        this.cells.push(new BehaviouralCell(i, j));
      }
    }
  }

  createCellsWithStateInfo(columns, rows, states) {
    this.cells = [];
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const stateObj = { column: i, row: j };
        let newCell;
        const aliveAsPerStatesList = states.some(
          state => state.column === stateObj.column &&
          state.row === stateObj.row
        );
        if (aliveAsPerStatesList) {
          newCell = new BehaviouralCell(i, j, DumbCell.createLive());
        } else {
          newCell = new BehaviouralCell(i, j, DumbCell.createDead());
        }
        this.cells.push(newCell);
      }
    }
  }

  addNeighborsToCells() {
    this.cells.forEach(cell => {
      this.cells.forEach(otherCell => {
        if (cell.isNeighborCell(otherCell)) {
          cell.addNeighbor(otherCell);
        }
      });
    });
  }

  tick() {
    let callbacks = [];

    this.cells.forEach(cell => {
      if (cell.changesState()) {
        callbacks.push(() => cell.nextState());
      }
    });

    callbacks.forEach(callback => callback());
  }

  getCellAt(x, y) {
    for (
        let i = 0,
        length = this.cellsCount(),
        expectedCell = new BehaviouralCell(x, y);
        i < length;
        i++
    ) {
      if (this.cells[i].equalsCell(expectedCell)) {
        return this.cells[i];
      }
    }

    return null;
  }

  cellsCount() {
    return this.cells.length;
  }
};

export default Universe;
