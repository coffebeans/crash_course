const Unit = {
    Centimeter: { name: 'CENTIMETER', type: 'LENGTH', multiplicativeUnitFactor: 1, additionUnitFactor: 0 },
    Meter: { name: 'METER', type: 'LENGTH', multiplicativeUnitFactor: 100, additionUnitFactor: 0 },
    Kilometer: { name: 'KILOMETER', type: 'LENGTH', multiplicativeUnitFactor: 100000, additionUnitFactor: 0 },
    Gram: { name: 'GRAM', type: 'WEIGHT', multiplicativeUnitFactor: 1, additionUnitFactor: 0 },
    Kilogram: { name: 'KILOGRAM', type: 'WEIGHT', multiplicativeUnitFactor: 1000, additionUnitFactor: 0 },
    Celsius: { name: 'CELSIUS', type: 'TEMPERATURE', multiplicativeUnitFactor: 9, additionUnitFactor: 0},
    Fahrenheit: { name: 'FAHRENHEIT', type: 'TEMPERATURE', multiplicativeUnitFactor: 5, additionUnitFactor: 32 },
    Kelvin: { name: 'KELVIN', type: 'TEMPERATURE', multiplicativeUnitFactor: 9, additionUnitFactor: 273.15 },
};

export default Unit;
