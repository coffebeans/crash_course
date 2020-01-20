import BehaviouralCell from './cell/behaviouralCell';

class Universe {
  constructor(columns = 0, rows = 0) {
    this.create(columns, rows);
  }

  create(columns = 0, rows = 0) {
    this.createCells(columns, rows);
    this.addNeighborsToCells();
  }

  createCells(columns, rows) {
    this.cells = [];
    for (let i = 1; i <= columns; i++) {
      for (let j = 1; j <= rows; j++) {
        this.cells.push(new BehaviouralCell(i, j));
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