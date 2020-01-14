class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }

    
    
    equals(measure) {
        let measurement = convertToCentimeter(this.value, this.unit);
        let otherMeasurmenet = convertToCentimeter(measure.value, measure.unit);
        return measurement === otherMeasurmenet;
    }
}

const Unit = {
   'CM': 'cm',
   'M': 'm'
}

function convertToCentimeter(value, unit) {
    if (unit === Unit.M) { 
        return value * 100; 
    } 
    
    return value;
}

module.exports = {
    Measurement,
    Unit,
}