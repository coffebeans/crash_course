import Unit from './unit';

export default class Measurement {
    constructor (value, unit) {
        this.value = value;
        this.unit = unit;
    }
    equals(measurement) {
        const incomingMeasurementObjInCommonUnit = this.convertToCommonUnit(measurement);
        return incomingMeasurementObjInCommonUnit.value === this.value;
    }
    add(measurement) {
        const incomingMeasurementObjInCommonUnit = this.convertToCommonUnit(measurement);
        const resultantValueInCommonUnit = incomingMeasurementObjInCommonUnit.value + this.value;
        return new Measurement(resultantValueInCommonUnit, this.unit);
    }
    areUnitsEqual(measurement) {
        return measurement instanceof Measurement && measurement.unit.type === this.unit.type;
    }
    convertToCommonUnit(measurement) {
        if (this.areUnitsEqual(measurement)) {
            return new Measurement(
                ((measurement.value * measurement.unit.toUnitFactor) / this.unit.toUnitFactor),
                this.unit
            );
        }
        throw new Error('Invalid Unit types!');
    }
}