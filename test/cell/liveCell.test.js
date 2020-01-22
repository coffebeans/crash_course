import LiveCell from '../../src/cell/liveCell';

describe('Live cell', () => {
    let liveCell;
    beforeEach(() => {
        liveCell = new LiveCell();
    });

    it('should return true when isAlive is called', () => {
        expect(liveCell.isAlive()).toBe(true);
    })

    it('should die when it has less than 2 neighbors alive', () => {
        expect(liveCell.changesState(1)).toBe(true);
    });

    it ('should stay alive when it has 2 live neighbors', () => {
        expect(liveCell.changesState(2)).toBe(false);
    });

    it('should stay alive when it has 3 live neighbors', () => {
        expect(liveCell.changesState(3)).toBe(false);
    });

    it('should die when it has more than 3 live neighbors', () => {
        expect(liveCell.changesState(4)).toBe(true);
    });
});