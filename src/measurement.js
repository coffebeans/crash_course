import Unit from './unit';

export default class Measurement {
    constructor (value, unit) {
        this.value = value;
        this.unit = unit;
    }
    equals(measurement) {
        if (measurement instanceof Measurement && measurement.unit.type === this.unit.type) {
            const incomingUnitValue = measurement.value * measurement.unit.toUnitFactor;
            const currentUnitValue = this.value * this.unit.toUnitFactor;
            return incomingUnitValue === currentUnitValue;
        }
        throw new Error('Invalid comparison!');
    }
    add(measurement) {
        if (measurement instanceof Measurement && measurement.unit.type === this.unit.type) {
            const incomingUnitValue = measurement.value * measurement.unit.toUnitFactor;
            const currentUnitValue = this.value * this.unit.toUnitFactor
            const resultantUnitValue = incomingUnitValue + currentUnitValue;
            return new Measurement(resultantUnitValue/measurement.unit.toUnitFactor, measurement.unit);
        }
    }
}