import Unit from './unit';

export default class Measurement {
    constructor (value, unit) {
        this.value = value;
        this.unit = unit;
    }
    equals(measurement) {
        if (measurement instanceof Measurement) {
            const incomingCentimeterValue = measurement.value * measurement.unit.toCentimeterFactor;
            const currentCentimeterValue = this.value * this.unit.toCentimeterFactor;
            return incomingCentimeterValue === currentCentimeterValue;
        }
    }
}