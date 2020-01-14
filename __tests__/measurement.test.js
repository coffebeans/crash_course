import Measurement from "../src/measurement";
import Unit from "../src/unit";

describe ("Measurement", function() {
    describe('LENGTH', () => {
        it("check if 100 centimeters is 100 centimeter", () => {
            let measurement1 = new Measurement(100, Unit.Centimeter);
            let measurement2 = new Measurement(100, Unit.Centimeter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 100 centimeters is not 1000 centimeter", () => {
            let measurement1 = new Measurement(100, Unit.Centimeter);
            let measurement2 = new Measurement(1000, Unit.Centimeter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(false);
        });
        it("check if 100 centimeters is 1 meter", () => {
            let measurement1 = new Measurement(100, Unit.Centimeter);
            let measurement2 = new Measurement(1, Unit.Meter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 1 meter is 100 centimeter", () => {
            let measurement1 = new Measurement(1, Unit.Meter);
            let measurement2 = new Measurement(100, Unit.Centimeter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 10 meter is not 100 centimeter", () => {
            let measurement1 = new Measurement(100, Unit.Centimeter);
            let measurement2 = new Measurement(10, Unit.Meter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(false);
        });
        it("check if 1000 meter is 1 kilometer", () => {
            let measurement1 = new Measurement(1000, Unit.Meter);
            let measurement2 = new Measurement(1, Unit.Kilometer);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 1 kilometer is 1000 meter", () => {
            let measurement1 = new Measurement(1, Unit.Kilometer);
            let measurement2 = new Measurement(1000, Unit.Meter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 100000 centimeter is 1 kilometer", () => {
            let measurement1 = new Measurement(100000, Unit.Centimeter);
            let measurement2 = new Measurement(1, Unit.Kilometer);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 1 kilometer is 100000 centimeter", () => {
            let measurement1 = new Measurement(1, Unit.Kilometer);
            let measurement2 = new Measurement(100000, Unit.Centimeter);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 1 centimeter is ? kilometer", () => {
            let measurement1 = new Measurement(1, Unit.Centimeter);
            let measurement2 = new Measurement(0.00001, Unit.Kilometer);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
    });
    describe('WEIGHT', () => {
        it("check if 1000 grams is 1 kilogram", () => {
            let measurement1 = new Measurement(1000, Unit.Gram);
            let measurement2 = new Measurement(1, Unit.Kilogram);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
        it("check if 1 kilograms is 1000 grams", () => {
            let measurement1 = new Measurement(1, Unit.Kilogram);
            let measurement2 = new Measurement(1000, Unit.Gram);
            let result = measurement1.equals(measurement2)
            expect(result).toBe(true);
        });
    });
    describe('INVALID COMPARISION', () => {
        it("checks if 1 grams is 1 centimeter should throw an error", () => {
            let measurement1 = new Measurement(1, Unit.Gram);
            let measurement2 = new Measurement(1, Unit.Centimeter);
            let result = () => {
                measurement1.equals(measurement2);
            };
            expect(result).toThrow('Invalid comparison!');
        });
        it("checks if 1 kilogram is 1 kilometer should throw an error", () => {
            let measurement1 = new Measurement(1, Unit.Kilogram);
            let measurement2 = new Measurement(1, Unit.Kilometer);
            let result = () => {
                measurement1.equals(measurement2)
            };
            expect(result).toThrow('Invalid comparison!');
        });
    });
});