import BehaviouralCell from '../../src/cell/behaviouralCell';
import DumbCell from '../../src/cell/dumbCell';

describe('Behavioural Cell', () => {
    let cell;
    beforeEach(() => {
        cell = new BehaviouralCell(3, 3);
    })

    it('should throw exception when invalid coordinates provided', () => {
        const errorFunc = () => { new BehaviouralCell(-1, -1) };
        expect(errorFunc).toThrow('Invalid coordinates: x=-1 y=-1!');
    });

    it('should have [x, y] coordinates equal to [3,3]', () => {
        expect(cell.equalsCell(new BehaviouralCell(3, 3))).toBe(true);
    });

    it('should not have [x, y] coordinates equal to [2,1]', () => {
        expect(cell.equalsCell(new BehaviouralCell(2, 1))).toBe(false);
    });

    it('should not have neighbor with identical [x, y]', () => {
        expect(cell.isNeighborCell(new BehaviouralCell(3, 3))).toBe(false);
    });

    it('should recognize cells adjacent to [x, y] as neighbor', () => {
        expect(cell.isNeighborCell(new BehaviouralCell(2, 2))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(2, 3))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(2, 4))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(3, 2))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(3, 4))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(4, 2))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(4, 3))).toBe(true);
        expect(cell.isNeighborCell(new BehaviouralCell(4, 4))).toBe(true);
    });

    it('should not recognize cells nonadjacent to [x, y] as neighbor', () => {
        expect(cell.isNeighborCell(new BehaviouralCell(1, 1))).toBe(false);
        expect(cell.isNeighborCell(new BehaviouralCell(3, 5))).toBe(false);
        expect(cell.isNeighborCell(new BehaviouralCell(5, 3))).toBe(false);
        expect(cell.isNeighborCell(new BehaviouralCell(9, 11))).toBe(false);
    });

    it('should have 0 neighbors before adding them', () => {
        expect(cell.getNeighborsCount()).toBe(0);
    });

    it('should have 2 neighbors after 2 neighbors added', () => {
        cell.addNeighbor(new BehaviouralCell(2, 2));
        cell.addNeighbor(new BehaviouralCell(4, 4));

        expect(cell.getNeighborsCount()).toBe(2);
    });

    it('should have isAlive true when live cell injected', () => {
        const newCell = new BehaviouralCell(1, 1, DumbCell.createLive());

        expect(newCell.isAlive()).toBe(true);
    });

    it('should have isAlive false when dead cell injected', () => {
        const newCell = new BehaviouralCell(1, 1, DumbCell.createDead());

        expect(newCell.isAlive()).toBe(false);
    });

    it('should change state from dead to alive when it has exactly 3 live neighbors', () => {
        const deadCell = new BehaviouralCell(1, 1, DumbCell.createDead()),
          liveCell12 = new BehaviouralCell(1, 2, DumbCell.createLive()),
          liveCell21 = new BehaviouralCell(2, 1, DumbCell.createLive()),
          liveCell22 = new BehaviouralCell(2, 2, DumbCell.createLive());

        deadCell.addNeighbor(liveCell12);
        deadCell.addNeighbor(liveCell21);
        deadCell.addNeighbor(liveCell22);

        expect(deadCell.changesState()).toBe(true);
    });

    it('should not change state from dead to alive when has only 2 live neighbors', () => {
        const deadCell = new BehaviouralCell(1, 1, DumbCell.createDead()),
          liveCell12 = new BehaviouralCell(1, 2, DumbCell.createLive()),
          liveCell21 = new BehaviouralCell(2, 1, DumbCell.createLive()),
          deadCell22 = new BehaviouralCell(2, 2, DumbCell.createDead());

        deadCell.addNeighbor(liveCell12);
        deadCell.addNeighbor(liveCell21);
        deadCell.addNeighbor(deadCell22);

        expect(deadCell.changesState()).toBe(false);
    });

    it('should not change state from alive to dead when it has 2 live neighbors', () => {
        const liveCell = new BehaviouralCell(1, 1, DumbCell.createLive()),
          liveCell12 = new BehaviouralCell(1, 2, DumbCell.createLive()),
          liveCell21 = new BehaviouralCell(2, 1, DumbCell.createLive()),
          deadCell22 = new BehaviouralCell(2, 2, DumbCell.createDead());

        liveCell.addNeighbor(liveCell12);
        liveCell.addNeighbor(liveCell21);
        liveCell.addNeighbor(deadCell22);

        expect(liveCell.changesState()).toBe(false);
    });

    it('should change state from alive to dead when next state is requested', () => {
        const liveCell = new BehaviouralCell(1, 1, DumbCell.createLive());

        expect(liveCell.isAlive()).toBe(true);
        liveCell.nextState();
        expect(liveCell.isAlive()).toBe(false);
    });

    it('should change cell state from dead to alive when next state is requested', () => {
        const deadCell = new BehaviouralCell(1, 1, DumbCell.createDead());

        expect(deadCell.isAlive()).toBe(false);
        deadCell.nextState();
        expect(deadCell.isAlive()).toBe(true);
    });
});
