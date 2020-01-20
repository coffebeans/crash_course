import DeadCell from '../../src/cell/deadCell';

describe('Dead cell', () => {
    let deadCell;
    beforeEach(() => {
        deadCell = new DeadCell();
    });

    it('should return false when isAlive is called', () => {
        expect(deadCell.isAlive()).toBe(false);
    })

    it('should come back to life when it has exactly 3 live neighbors', () => {
        expect(deadCell.changesState(3)).toBe(true);
    });

    it('should stay dead when it has less than 3 live neighbors', () => {
        expect(deadCell.changesState(2)).toBe(false);
    });

    it('should stay dead when it has more than 3 live neighbors', () => {
        expect(deadCell.changesState(4)).toBe(false);
    });
});