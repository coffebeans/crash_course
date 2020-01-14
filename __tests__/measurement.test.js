import { Measurement, Unit } from "../src/measurement";

describe("Measurement", () => {
    describe('#equals', () => {
        it('should return true for centimeter 100 and meter 1', () => {
            let m1 = new Measurement(100, Unit.CM);
            let m2 = new Measurement(1, Unit.M);

            let isEqual = m1.equals(m2);
            expect(isEqual).toBe(true);
        });

        it('should return true for meter 1 and centimeter 100', () => {
            let m1 = new Measurement(1, Unit.M);
            let m2 = new Measurement(100, Unit.CM);

            let isEqual = m1.equals(m2);
            expect(isEqual).toBe(true);
        });
    });
});
