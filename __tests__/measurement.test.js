import Measurement from "../src/measurement";
import Unit from "../src/unit";

describe ("Measurement", function() {
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
});