import Universe from '../src/universe';
import BehaviouralCell from '../src/cell/behaviouralCell';

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
    universe.create(6, 9);
    const cell = universe.getCellAt(6, 9);
    expect(cell.equalsCell(new BehaviouralCell(6, 9))).toBe(true);
  });

  it('should add neighbors to all cells', () => {
    universe.create(3, 3);

    expect(universe.getCellAt(1, 1).getNeighborsCount()).toBe(3);
    expect(universe.getCellAt(1, 2).getNeighborsCount()).toBe(5);
    expect(universe.getCellAt(2, 2).getNeighborsCount()).toBe(8);
    expect(universe.getCellAt(2, 3).getNeighborsCount()).toBe(5);
    expect(universe.getCellAt(3, 3).getNeighborsCount()).toBe(3);
  });

  it('should not generate next state for cell when tick called but update rules not met', () => {
    let cell, changeStateStub, nextStateSpy;

    universe.create(1, 1);

    cell = universe.getCellAt(1, 1);
    changeStateStub = jest.spyOn(cell, 'changesState').mockImplementation(() => false);
    nextStateSpy = jest.spyOn(cell, 'nextState');

    universe.tick();

    expect(changeStateStub).toHaveBeenCalledTimes(1);
    expect(nextStateSpy).not.toHaveBeenCalled();
  });

  it('should generate next state for cell when tick called and update rules met', () => {
    let cell, changeStateStub, nextStateSpy;

    universe.create(1, 1);

    cell = universe.getCellAt(1, 1);
    changeStateStub = jest.spyOn(cell, 'changesState').mockImplementation(() => true);
    nextStateSpy = jest.spyOn(cell, 'nextState');

    universe.tick();

    expect(changeStateStub).toHaveBeenCalledTimes(1);
    expect(nextStateSpy).toHaveBeenCalledTimes(1);
  });

});