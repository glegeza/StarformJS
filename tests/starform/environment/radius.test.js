const expect = require('expect');
const environment = require('../../../starform/environment/radius');
const {checkForErrorWithArgs} = require('../../utilities');

describe('VolumeRadius tests', () => {
    it('should throw type error with non-number inputs', () => {
        expect(() => {
            environment.volumeRadius('test', 20);
        }).toThrow(TypeError);
        expect(() => {
            environment.volumeRadius(20, 'test');
        }).toThrow(TypeError);
    });

    it('should throw range error with negative or zero inputs', () => {
        const testValues = [
            [-20, 2], [2, -2], [0, 0]
        ];

        testValues.forEach((v) => {
            expect(() => {
                environment.volumeRadius(...v);
            }).toThrow(RangeError);
        });
    });

    it('should return a number with valid input', () => {
        expect(typeof environment.volumeRadius(0.000003, 5.13)).toBe('number');
    });
});

describe('KothariRadius tests', () => {
    it('should throw type error with invalid arguments', () => {
        const args = [
            ['test', false, 0], [1, 'test', 0], [1, false, 'test']
        ];

        checkForErrorWithArgs(args, environment.kothariRadius, TypeError);
    });

    it('should throw range error with negative or zero mass', () => {
        const args = [
            [0, false, 0], [-10, true, 0]
        ];

        checkForErrorWithArgs(args, environment.kothariRadius, RangeError);
    });
    
    it('should throw range error with orbit zone below 1 or above 3', () => {
        const args = [
            [0.00003, false, -1], [0.00003, false, 0], [0.00003, false, 4]
        ];

        checkForErrorWithArgs(args, environment.kothariRadius, RangeError);
    });

    it('should return a number with valid input', () => {
        expect(typeof environment.kothariRadius(0.00003, false, 1)).toBe('number');
    });
});