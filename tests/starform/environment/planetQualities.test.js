const environnment = require('../../../starform/environment/planetQualities');
const testPlanets = require('./data/planetQualities.json');
const expect = require('expect');

describe('isTidallyLocked Tests', () => {
    const locked = testPlanets.tidallyLocked;
    const notLocked = testPlanets.notTidallyLocked;

    it('should return true if a planet\'s day and orbital period are exactly equal', () => {
        locked.forEach((p) => {
            expect(environnment.isTidallyLocked(p)).toBeTruthy();    
        });
    });

    it('should return false if a planet\'s day and orbital period differ', () => {
        notLocked.forEach((p) => {
            expect(environnment.isTidallyLocked(p)).toBeFalsy();    
        });
    });
});

describe('isHabitable Tests', () => {

});

describe('isEarthlike Tests', () => {

});