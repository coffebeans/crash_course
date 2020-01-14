const Unit = {
    Centimeter: { name: 'CENTIMETER', type: 'LENGTH', toCentimeterFactor: 1 },
    Meter: { name: 'METER', type: 'LENGTH', toCentimeterFactor: 100 },
    Kilometer: { name: 'KILOMETER', type: 'LENGTH', toCentimeterFactor: 100000 },
    Gram: { name: 'GRAM', type: 'WEIGHT', toGramFactor: 1 },
    Kilogram: { name: 'KILOGRAM', type: 'WEIGHT', toGramFactor: 1000 }
};
export default Unit;