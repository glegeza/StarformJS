const GlobalConstants = require('../globalConstants');
const utilities = require('../utilities');

/**
 * Returns a planet's period in Earth days
 * @param {Number} separation Separation in units of AU
 * @param {Number} smallMass Mass of the smaller body in units of solar masses
 * @param {Number} largeMass Mass of the larger body in units of solar masses
 */
const period = (separation, smallMass, largeMass) => {
    if (typeof separation !== 'number') {
        throw new TypeError('separation must be a number');
    }
    if (typeof smallMass !== 'number') {
        throw new TypeError('smallMass must be a number');
    }
    if (typeof largeMass !== 'number') {
        throw new TypeError('largeMass must be a number');
    }
    if (separation <= 0 || smallMass <= 0 || largeMass <= 0) {
        throw new RangeError('all arguments must be positive');
    }

    const periodInYears = Math.sqrt(utilities.pow3(separation) / (smallMass + largeMass));
    return (periodInYears * GlobalConstants.DAYS_IN_A_YEAR);
};

// TODO IMPORTANT: this modifies the planet and it shouldn't
/**
 * Returns the length of a planet's day in hours
 * @param {Planet} planet The planet to calculate a 
 */
const dayLength = (planet) => {

};

module.exports = {
    period, dayLength
};