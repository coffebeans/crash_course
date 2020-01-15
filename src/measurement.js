import Unit from './unit';

export default class Measurement {
    constructor (value, unit) {
        this.value = value;
        this.unit = unit;
    }
    equals(measurement) {
        if (this.areUnitsEqual(measurement)) {
            const incomingMeasurementObjInCommonUnit = this.convertToCommonUnit(measurement);
            return incomingMeasurementObjInCommonUnit.value === this.value;
        }
        throw new Error('Invalid comparison!');
    }
    add(measurement) {
        if (this.areUnitsEqual(measurement)) {
            const incomingMeasurementObjInCommonUnit = this.convertToCommonUnit(measurement);
            const resultantValueInCommonUnit = incomingMeasurementObjInCommonUnit.value + this.value;
            return new Measurement(resultantValueInCommonUnit, this.unit);
        }
    }
    areUnitsEqual(measurement) {
        return measurement instanceof Measurement && measurement.unit.type === this.unit.type;
    }
    convertToCommonUnit(measurement) {
        return new Measurement(
            ((measurement.value * measurement.unit.toUnitFactor) / this.unit.toUnitFactor),
            this.unit
        );
    }
}