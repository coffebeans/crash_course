class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    } 
    
    equals(measure) {

        let otherMeasurement = this.convertToUnit(measure);
       
        return this.value === otherMeasurement.value;
    }

    add(measure){
        let convertedMeasure = this.convertToUnit(measure);
        return new Measurement(this.value + convertedMeasure.value, this.unit);
    }

    convertToUnit(measure) {
        if (this.unit.type !== measure.unit.type) {
            throw new Error('Incompatible unit type');
        }

        let convertedValue = {};

        if (this.unit.type === 'temperature') {
            convertedValue = ((this.unit.conversion.factor/measure.unit.conversion.factor) * (measure.value 
                - measure.unit.conversion.difference)) + this.unit.conversion.difference;
        }else{
            convertedValue = measure.value * (this.unit.conversion/measure.unit.conversion);
        }
        
    
        return new Measurement(convertedValue, this.unit);
    }

}





const Unit = {
   'CM': {
       conversion: 100000,
       type: 'length'
   },
   'M': {
        conversion: 1000,
        type: 'length'
    },
   'KM': {
        conversion: 1,
        type: 'length'
    },
    'G': {
        conversion: 1000,
        type: 'weight'
    },
    'KG': {
         conversion: 1,
         type: 'weight'
     },
     'Celsius': {
        conversion: {
            factor: 5,
            difference: 0
        },
        type: 'temperature'
     },
     'Fahrenheit': {
        conversion: {
            factor: 9,
            difference: 32
        },
        type: 'temperature'
     },
     'Kelvin': {
        conversion: {
            factor: 5,
            difference: 273.15
        },
        type: 'temperature'
     }
}

module.exports = {
    Measurement,
    Unit,
}