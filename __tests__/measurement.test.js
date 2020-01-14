import { Measurement, Unit } from "../src/measurement";

describe("Measurement", () => {
    describe('#equals', () => {
        const centimeter_100 = new Measurement(100, Unit.CM);
        const meter_1 = new Measurement(1, Unit.M);

        it('should return true for centimeter 100 and meter 1', () => {
            const isEqual = centimeter_100.equals(meter_1);
            expect(meter_1.unit).toBe(Unit.M);
            expect(isEqual).toBe(true);
        });

        it('should return true for meter 1 and centimeter 100', () => {
            const isEqual = meter_1.equals(centimeter_100);
            expect(isEqual).toBe(true);
        });

        it('should return true for meter 1000 and kilometer 1', () => {
            const kilometer_1 = new Measurement(1, Unit.KM);
            const meter_1000 = new Measurement(1000, Unit.M);

            const isEqual = meter_1000.equals(kilometer_1);
            expect(isEqual).toBe(true);
        });

        it('should return true for centimeter 100000 and kilometer 1', () => {
            const kilometer_1 = new Measurement(1, Unit.KM);
            const centimeter_1000 = new Measurement(100000, Unit.CM);

            const isEqual = centimeter_1000.equals(kilometer_1);
            expect(isEqual).toBe(true);
        });
    });
});
