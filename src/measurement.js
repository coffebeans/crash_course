import Unit from './unit';

export default class Measurement {
    constructor (value, unit) {
        this.value = value;
        this.unit = unit;
    }
    equals(measurement) {
        if( measurement instanceof Measurement ) {
            if ( measurement.unit === this.unit ) {
                if ( measurement.value === this.value ) {
                    return true
                }
                return false;
            } else {
                switch (measurement.unit) {
                    case Unit.Centimeter: {
                        const newMeasurementObj = new Measurement(measurement.value/100, Unit.Meter);
                        return newMeasurementObj.value === this.value;
                    }
                    case Unit.Meter: {
                        const newMeasurementObj = new Measurement(measurement.value * 100, Unit.Centimeter);
                        return newMeasurementObj.value === this.value;
                    }
                    default: {
                        return false;
                    }
                }
            }
        }
    }
}