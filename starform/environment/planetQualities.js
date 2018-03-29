const GlobalConstants = require('../globalConstants');
const PlanetType = require('../data/PlanetType');
const Planet = require('../data/Planet');
const breathability = require('./breathability');

/**
 * Returns true if the planet is tidally locked to its parent body
 * @param {Planet} planet The planet to test
 */
const isTidallyLocked = (planet) => {
    return Math.floor(planet.day) === Math.floor(planet.orbitalPeriod * 24);
};

/**
 * Returns true if the planet's conditions can support human life
 * @param {Planet} planet The planet to test
 */
const isHabitable = (planet) => {
    return breathability.isBreathable(planet.atmosphere) &&
        !planet.hasResonantPeriod &&
        !planet.isTidallyLocked;
};

/**
 * Returns true if the planet's conditions are similar to Earth
 * @param {Planet} planet The planet to test
 * @returns {boolean} True if similar to Earth
 */
const isEarthlike = (planet) => {
    const relTemp = (planet.surfaceTemp - GlobalConstants.FREEZING_POINT_OF_WATER) - GlobalConstants.EARTH_AVERAGE_CELSIUS;
    const seas = planet.waterCover * 100.0;
    const clouds = planet.cloudCover * 100.0;
    const pressure = planet.atmosphere.surfacePressure / GlobalConstants.EARTH_SURF_PRES_IN_MILLIBARS;
    const ice = planet.iceCover * 100.0;

    return
        planet.surfaceGravity >= .8 &&
        planet.surfaceGravity <= 1.2 &&
        relTemp >= -2.0 &&
        relTemp <= 3.0 &&
        ice <= 10.0 &&
        pressure >= 0.5 &&
        pressure <= 2.0 &&
        clouds >= 40.0 &&
        clouds <= 80.0 &&
        seas >= 50.0 &&
        seas <= 80.0 &&
        planet.type != PlanetType.Water &&
        breathability.isBreathable(planet.atmosphere);
};

module.exports = {
    isTidallyLocked,
    isHabitable,
    isEarthlike
};