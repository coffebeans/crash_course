class Measure {
    constructor(number,unit){
       this.number = number
       this.unit = unit
    }

    equals(measurement2) {
               if(this.unit === Unit.CENTIMETER) {
                return measurement2.number === this.number/100;
               }else if(this.unit === Unit.METER){
                return measurement2.number === this.number*100;
               }
                  

                
        }
    
}

const Unit = {
    METER: 'm',
    CENTIMETER: 'cm'};

export {Measure, Unit};