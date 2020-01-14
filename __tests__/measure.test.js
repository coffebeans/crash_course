import {Measure,Unit} from "../src/Measure";

describe('Measure', function () {
    describe('check', function () {
      it('should return whether entered value is equivalent to 1m or not', function () {
        let measureInCentimeter = new Measure(100,Unit.CENTIMETER);
        let measureInMeter = new Measure(1,Unit.METER);
        let isEqual = measureInCentimeter.equals(measureInMeter);
        expect(isEqual).toBe(true);

      });
    it('should return whether entered value is equivalent to 100cm or not', function () {
        let measureInCentimeter = new Measure(100,Unit.CENTIMETER);
        let measureInMeter = new Measure(1,Unit.METER);
        let isEqual = measureInMeter.equals(measureInCentimeter);
        expect(isEqual).toBe(true);
    });


});
});
