const utilities = require('../utilities');
const GlobalConstants = require('../globalConstants');

/**
 * Returns the empirical density in grams/cc
 * @param {Number} mass Mass in units of solar masses
 * @param {Number} orbRadius Orbital radius in units of AU
 * @param {Number} rEcosphere Habitable zone of the star in AU
 * @param {Boolean} isGasGiant True if the body is a gas giant
 */
const empiricalDensity = (mass, orbRadius, rEcosphere, isGasGiant) => {
    if (typeof mass !== 'number') {
        throw new TypeError('mass must be a number');
    }
    if (typeof orbRadius !== 'number') {
        throw new TypeError('orbRadius must be a number');
    }
    if (typeof rEcosphere !== 'number') {
        throw new TypeError('rEcosphere must be a number');
    }
    if (typeof isGasGiant !== 'boolean') {
        throw new TypeError('isGasGiant must be a boolean');
    }
    if (mass <= 0) {
        throw new RangeError('mass must be positive');
    }
    if (orbRadius <= 0) {
        throw new RangeError('orbRadius must be positive');
    }

    let density = Math.pow(mass * GlobalConstants.SUN_MASS_IN_EARTH_MASSES, (1.0 / 8.0));
    density *= utilities.pow1_4(rEcosphere / orbRadius);

    return isGasGiant ? (density * 1.2) : (density * 5.5);
};

/**
 * Density returned in units of grams/cc
 * @param {Number} mass Mass in units of solar masses
 * @param {Number} equatRadius Equatorial radius in km
 */
const volumeDensity = (mass, equatRadius) => {
    if (typeof mass !== 'number') {
        throw new TypeError('mass must be a number');
    }
    if (typeof equatRadius !== 'number') {
        throw new TypeError('equatRadius must be a number');
    }
    if (mass <= 0) {
        throw new RangeError('mass must be positive');
    }
    if (equatRadius <= 0) {
        throw new RangeError('equatRadius must be positive');
    }

    const massGrams = mass * GlobalConstants.SOLAR_MASS_IN_GRAMS;
    const equatRadiusCm = equatRadius * GlobalConstants.CM_PER_KM;
    const volume = (4.0 * Math.PI * utilities.pow3(equatRadiusCm)) / 3.0;
    return (massGrams / volume);
};

module.exports = {
    empiricalDensity, volumeDensity
};