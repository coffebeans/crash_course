class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    } 
    
    equals(measure) {
        if(this.unit.type !== measure.unit.type) {
            throw new Error('Incompatible unit type');
        }

        let measurement = this.value * this.unit.conversionFactor;
        let otherMeasurement = measure.value * measure.unit.conversionFactor;

        return measurement === otherMeasurement;
    }
}

const Unit = {
   'CM': {
       conversionFactor: 1,
       type: 'length'
   },
   'M': {
        conversionFactor: 100,
        type: 'length'
    },
   'KM': {
        conversionFactor: 100000,
        type: 'length'
    },
    'G': {
        conversionFactor: 1,
        type: 'weight'
    },
    'KG': {
         conversionFactor: 1000,
         type: 'weight'
     },
}

module.exports = {
    Measurement,
    Unit,
}