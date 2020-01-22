import Universe from '../src/universe';
import BehaviouralCell from '../src/cell/behaviouralCell';

describe('Game-of-life', () => {
  let universe;
  beforeEach(() => {
    universe = new Universe();
  });

  it('simulates Block pattern - Still life', () => {
    const blockPatternAliveCells = [
      {
        column: 1,
        row: 1
      },
      {
        column: 1,
        row: 2
      },
      {
        column: 2,
        row: 1
      },
      {
        column: 2,
        row: 2
      },
    ];
    universe.createWithStateInfo(4, 4, blockPatternAliveCells);
    universe.tick();
    expect(universe.getCellAt(1, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(1, 2).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 2).isAlive()).toBe(true);
  });

  it('simulates Boat pattern - Still life', () => {
    const boatPatternAliveCells = [
      {
        column: 0,
        row: 1
      },
      {
        column: 1,
        row: 0
      },
      {
        column: 2,
        row: 1
      },
      {
        column: 0,
        row: 2
      },
      {
        column: 1,
        row: 2
      }
    ];
    universe.createWithStateInfo(4, 4, boatPatternAliveCells);
    universe.tick();
    expect(universe.getCellAt(0, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(1, 0).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(0, 2).isAlive()).toBe(true);
    expect(universe.getCellAt(1, 2).isAlive()).toBe(true);
  });

  it('simulates Blinker pattern - Oscillator', () => {
    const boatPatternAliveCells = [
      {
        column: 1,
        row: 1
      },
      {
        column: 1,
        row: 0
      },
      {
        column: 1,
        row: 2
      }
    ];
    universe.createWithStateInfo(4, 4, boatPatternAliveCells);
    universe.tick();
    expect(universe.getCellAt(1, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(0, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 1).isAlive()).toBe(true);
  });

  it('simulates Toad pattern - Two-phase oscillator', () => {
    const boatPatternAliveCells = [
      {
        column: 1,
        row: 1
      },
      {
        column: 1,
        row: 2
      },
      {
        column: 1,
        row: 3
      },
      {
        column: 2,
        row: 2
      },
      {
        column: 2,
        row: 3
      },
      {
        column: 2,
        row: 4
      }
    ];
    universe.createWithStateInfo(7, 7, boatPatternAliveCells);
    universe.tick();
    expect(universe.getCellAt(0, 2).isAlive()).toBe(true);
    expect(universe.getCellAt(1, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(1, 4).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 1).isAlive()).toBe(true);
    expect(universe.getCellAt(2, 4).isAlive()).toBe(true);
    expect(universe.getCellAt(3, 3).isAlive()).toBe(true);
  });
});

describe('Universe', () => {
  let universe;
  beforeEach(() => {
    universe = new Universe();
  });

  it('should be have no cells when created without dimension', () => {
    expect(universe.cellsCount()).toBe(0);
  });

  it('should have exactly 8 cells when world created with 4x2 dimension', () => {
    universe.create(4, 2);
    expect(universe.cellsCount()).toBe(8);
  });

  it('should have no cell at [6, 9] since not added', () => {
    expect(universe.getCellAt(6, 9)).toBeNull();
  });

  it('should have cell at [6, 9] after it gets added', () => {
    universe.create(7, 10);
    const cell = universe.getCellAt(6, 9);
    expect(cell.equalsCell(new BehaviouralCell(6, 9))).toBe(true);
  });

  it('should add neighbors to all cells', () => {
    universe.create(3, 3);

    expect(universe.getCellAt(0, 0).getNeighborsCount()).toBe(3);
    expect(universe.getCellAt(0, 1).getNeighborsCount()).toBe(5);
    expect(universe.getCellAt(1, 1).getNeighborsCount()).toBe(8);
    expect(universe.getCellAt(1, 2).getNeighborsCount()).toBe(5);
    expect(universe.getCellAt(2, 2).getNeighborsCount()).toBe(3);
  });

  it('should not generate next state for cell when tick called but update rules not met', () => {
    let cell, changeStateStub, nextStateSpy;

    universe.create(2, 2);

    cell = universe.getCellAt(1, 1);
    changeStateStub = jest.spyOn(cell, 'changesState').mockImplementation(() => false);
    nextStateSpy = jest.spyOn(cell, 'nextState');

    universe.tick();

    expect(changeStateStub).toHaveBeenCalledTimes(1);
    expect(nextStateSpy).not.toHaveBeenCalled();
  });

  it('should generate next state for cell when tick called and update rules met', () => {
    let cell, changeStateStub, nextStateSpy;

    universe.create(2, 2);

    cell = universe.getCellAt(1, 1);
    changeStateStub = jest.spyOn(cell, 'changesState').mockImplementation(() => true);
    nextStateSpy = jest.spyOn(cell, 'nextState');

    universe.tick();

    expect(changeStateStub).toHaveBeenCalledTimes(1);
    expect(nextStateSpy).toHaveBeenCalledTimes(1);
  });

});