class Measurement {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
        this.cm = this.convertToCentimeter(this.value,this.unit)
    }

    convertToCentimeter(value, unit) {
        if (unit === Unit.M) { 
            return value * 100; 
        } else {
            return value
        }
    }
    
    equals(measure) {
        return this.cm === measure.cm;
    }
}

const Unit = {
   'CM': 'cm',
   'M': 'm'
}

module.exports = {
    Measurement,
    Unit,
}