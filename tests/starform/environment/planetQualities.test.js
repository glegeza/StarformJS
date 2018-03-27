const environnment = require('../../../starform/environment/planetQualities');
const expect = require('expect');

describe('isTidallyLocked Tests', () => {
    it('should return true if a planet\'s day and orbital period are exactly equal', () => {
        const planet = {
            day: 24,
            orbitalPeriod: 1,
        };
        expect(environnment.isTidallyLocked(planet)).toBeTruthy();
    });

    it('should return false if a planet\'s day and orbital period differ', () => {
        const planet1 = {
            day: 24,
            orbitalPeriod: 365
        };
        const planet2 = {
            day: 24,
            orbitalPeriod: 1.5
        };
        expect(environnment.isTidallyLocked(planet1)).toBeFalsy();
        expect(environnment.isTidallyLocked(planet2)).toBeFalsy();
    });
});

describe('isHabitable Tests', () => {

});

describe('isEarthlike Tests', () => {

});