const environnment = require('../../../starform/environment/luminosity');
const expect = require('expect');

describe('Luminosity Tests', () => {
    it('should return a number when given a number', () => {
        const res = environnment.luminosity(1.3);
        expect(typeof res).toBe('number');
    });

    it('should return NaN if passed non-number value', () => {
        const res = environnment.luminosity('test');
        expect(res).toBe(NaN);
    });

    it('should return undefined if passed undefined', () => {
        const res = environnment.luminosity(undefined);
        expect(undefined).toBeUndefined();
    });
});