const environnment = require('../../../starform/environment/luminosity');
const expect = require('expect');

describe('Luminosity Tests', () => {
    it('should throw range error with negative mass', () => {
        expect(() => {
            environnment.luminosity(-2);
        }).toThrow(RangeError);
    });

    it('should throw type error if input is not a number', () => {
        expect(() => {
            environnment.luminosity('test');
        }).toThrow(TypeError);
    });

    it('should return a number when given a number', () => {
        const res = environnment.luminosity(1.3);
        expect(typeof res).toBe('number');
    });
});