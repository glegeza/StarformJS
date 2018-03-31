const expect = require('expect');
const environment = require('../../../starform/environment/density');
const {checkForErrorWithArgs} = require('../../utilities');

describe('EmpiricalDensity tests', () => {
    it('should return a positive number when given valid input', () => {
        const res = environment.empiricalDensity(0.00003, 1.0, 3.0, false);
        expect(typeof res).toBe('number');
        expect(res).toBeGreaterThan(0.0);
    });

    it('should throw type error with invalid arguments', () => {
        const args = [
            ['test', 1.0, 3.0, false],
            [0.00003, 'test', 3.0, false],
            [0.00003, 1.0, 'test', false],
            [0.00003, 1.0, 3.0, 'test']
        ];

        checkForErrorWithArgs(args, environment.empiricalDensity, TypeError);
    });

    it('should throw range error with zero or negative mass or orbital radius', () => {
        const args = [
            [0, 1.0, 3.0, false],
            [-1, 1.0, 3.0, false],
            [0.0003, 0.0, 3.0, false],
            [0.0003, -1.0, 3.0, false],
        ];

        checkForErrorWithArgs(args, environment.empiricalDensity, RangeError);
    });
});

describe('VolumeDensity tests', () => {
    it('should return a positive number when given valid input', () => {
        const res = environment.volumeDensity(0.00003, 5000);
        expect(typeof res).toBe('number');
        expect(res).toBeGreaterThan(0.0);
    });

    it('should throw type error with invalid arguments', () => {
        const args = [
            ['test', 5000],
            [0.00003, 'test'],
        ];

        checkForErrorWithArgs(args, environment.volumeDensity, TypeError);
    });

    it('should throw range error with zero or negative mass or radius', () => {
        const args = [
            [0, 5000],
            [-1, 5000],
            [0.0003, 0.0],
            [0.0003, -1.0],
        ];

        checkForErrorWithArgs(args, environment.volumeDensity, RangeError);
    });
});