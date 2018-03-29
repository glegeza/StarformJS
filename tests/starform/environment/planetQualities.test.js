const environment = require('../../../starform/environment/planetQualities');
const testPlanets = require('./data/planetQualities.json');
const expect = require('expect');

describe('isTidallyLocked Tests', () => {
    const locked = testPlanets.isTidallyLocked.tidallyLocked;
    const notLocked = testPlanets.isTidallyLocked.notTidallyLocked;

    it('should return true if a planet\'s day and orbital period are exactly equal', () => {
        locked.forEach((p) => {
            expect(environment.isTidallyLocked(p)).toBeTruthy();    
        });
    });

    it('should return false if a planet\'s day and orbital period differ', () => {
        notLocked.forEach((p) => {
            expect(environment.isTidallyLocked(p)).toBeFalsy();    
        });
    });
});

describe('isHabitable Tests', () => {
    const habitable = testPlanets.isHabitable.habitable;
    const uninhabitable = testPlanets.isHabitable.uninhabitable;

    it('should return true if a planet is habitable', () => {
        habitable.forEach((p) => {
            expect(environment.isHabitable(p)).toBeTruthy();
        });
    });

    uninhabitable.forEach((p) => {
        it(`should return false if a planet ${p.reason}`, () => {
            expect(environment.isHabitable(p)).toBeFalsy();
        })
    });
});

describe('isEarthlike Tests', () => {

});