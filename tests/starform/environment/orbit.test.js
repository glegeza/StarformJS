const expect = require('expect');
const environment = require('../../../starform/environment/orbit');
const {checkForErrorWithArgs} = require('../../utilities');

describe('Period tests', () => {
    it('should throw type error with invalid argument types', () => {
        const args = [
            ['test', 0.00003, 1.0], [1.0, 'test', 1.0], [1.0, 0.00003, 'test']
        ];

        checkForErrorWithArgs(args, environment.period, TypeError);
    });

    it('should throw range error with zero or negative arguments', () => {
        const args = [
            [0.0, 0.00003, 1.0], [-1.0, 0.00003, 1.0], [1.0, -0.00003, 1.0],
            [1.0, 0.0, 1.0], [1.0, 0.00003, -1.0], [1.0, 0.00003, 0.0],
        ];

        checkForErrorWithArgs(args, environment.period, RangeError);
    });

    it('should return a positive number with valid arguments', () => {
        const res = environment.period(1.0, 0.00003, 1.0);
        expect(typeof res).toBe('number');
        expect(res).toBeGreaterThan(0.0);
    });
});

describe('DayLength tests', () => {
    it('should correctly calculate Earth\'s day length', () => {
        expect(false).toBeTruthy();
    });
});