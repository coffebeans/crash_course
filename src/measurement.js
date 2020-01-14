class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    } 
    
    equals(measure) {
        let measurement = this.value * this.unit.toCentimeterFactor;
        let otherMeasurement = measure.value * measure.unit.toCentimeterFactor;

        return measurement === otherMeasurement;
    }
}

const Unit = {
   'CM': {
       toCentimeterFactor: 1,
   },
   'M': {
        toCentimeterFactor: 100,
    },
   'KM': {
        toCentimeterFactor: 100000,
    },
}

module.exports = {
    Measurement,
    Unit,
}