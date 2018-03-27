const global = require('../globalConstants');

/**
 * @description Returns the Roche limit of an object in KM
 * @param {number} bodyRadius Radius of the body in km
 * @param {number} bodyDensity Density of the body in g/cc
 * @param {number} satelliteDensity Density of the orbiting satellite in g/cc
 * @returns {number} roche limit in KM
 */
const rocheLimitKm = (bodyRadius, bodyDensity, satelliteDensity) => {
    return (1.26 * bodyRadius * Math.pow(bodyDensity / satelliteDensity, 1.0 / 3.0)) / 1000.0;
};

/**
 * @description Returns the Roche limit of an object in AU
 * @param {number} bodyRadius Radius of the body in km
 * @param {number} bodyDensity Density of the body in g/cc
 * @param {number} satelliteDensity Density of the orbiting satellite in g/cc
 * @returns {number} roche limit in AU
 */
const rocheLimitAu = (bodyRadius, bodyDensity, satelliteDensity) => {
    return rocheLimitKm(bodyRadius, bodyDensity, satelliteDensity)
        / global.KM_PER_AU;
};

module.exports = {
    rocheLimitAu,
    rocheLimitKm
};