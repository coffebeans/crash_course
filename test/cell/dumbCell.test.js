import DumbCell from '../../src/cell/dumbCell';
import LiveCell from '../../src/cell/liveCell';
import DeadCell from '../../src/cell/deadCell';

describe('Dumb Cell', () => {
    it('should create live cell', () => {
        const liveCell = DumbCell.createLive();
        expect(liveCell instanceof LiveCell).toBe(true);
    });

    it('should create dead cell', () => {
        const deadCell = DumbCell.createDead();
        expect(deadCell instanceof DeadCell).toBe(true);
    });

    it('should create live cell if threshold is 0', () => {
        const randomCell = DumbCell.createRandom(0);
        expect(randomCell instanceof LiveCell).toBe(true);
    });

    it('should create dead cell if threshold is 1', () => {
        const randomCell = DumbCell.createRandom(1);
        expect(randomCell instanceof DeadCell).toBe(true);
    });

    it('should create dead or live cell', () => {
        const randomCell = DumbCell.createRandom();
        expect(randomCell instanceof LiveCell || randomCell instanceof DeadCell).toBe(true);
    });

});
