const GlobalConstants = require('../globalConstants');
const utilities = require('../utilities');
const PlanetType = require('../data/PlanetType');

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
// NOTE: this doesn't return an accurate value for Earth at all
/**
 * Returns the length of a planet's day in hours
 * @param {Planet} planet The planet to calculate day length for
 */
const dayLength = (planet) => {
    // Fogg's information for this routine came from Dole "Habitable Planets
    // for Man", Blaisdell Publishing Company, NY, 1964.  From this, he came
    // up with his eq.12, which is the equation for the 'base_angular_velocity'
    // below.  He then used an equation for the change in angular velocity per
    // time (dw/dt) from P. Goldreich and S. Soter's paper "Q in the Solar
    // System" in Icarus, vol 5, pp.375-389 (1966).	 Using as a comparison the
    // change in angular velocity for the Earth, Fogg has come up with an
    // approximation for our new planet (his eq.13) and take that into account.
    // This is used to find 'change_in_angular_velocity' below.

    const planetaryMassInGrams = planet.mass * GlobalConstants.SOLAR_MASS_IN_GRAMS;
    const equatorialRadiusInCM = planet.radius * GlobalConstants.CM_PER_KM;
    const yearInHours = planet.orbitalPeriod * 24.0;
    const isGasGiant = (planet.type == PlanetType.GasGiant ||
                    planet.type == PlanetType.SubGasGiant ||
                    planet.type == PlanetType.SubSubGasGiant);

    planet.hasResonantPeriod = false; // Warning: Modify the planet

    let k2 = 0.33;
    if (isGasGiant)
    {
        k2 = 0.24;
    }

    const baseAngularVelocity = Math.sqrt(2.0 * GlobalConstants.J * (planetaryMassInGrams) /
                                    (k2 * utilities.pow2(equatorialRadiusInCM)));

    // This next calculation determines how much the planet's rotation is
    // slowed by the presence of the star
    const changeInAngularVelocity = GlobalConstants.CHANGE_IN_EARTH_ANG_VEL *
                                    (planet.density / GlobalConstants.EARTH_DENSITY) *
                                    (equatorialRadiusInCM / GlobalConstants.EARTH_RADIUS) *
                                    (GlobalConstants.EARTH_MASS_IN_GRAMS / planetaryMassInGrams) *
                                    Math.pow(planet.star.mass, 2.0) *
                                    (1.0 / Math.pow(planet.semiMajorAxisAU, 6.0));
    const angularVelocity = baseAngularVelocity + (changeInAngularVelocity *
                                            planet.star.age);

    // Now we change from rad/sec to hours/rotation
    let stopped = false;
    let dayInHours = GlobalConstants.RADIANS_PER_ROTATION / (GlobalConstants.SECONDS_PER_HOUR * angularVelocity);
    if (angularVelocity <= 0.0)
    {
        stopped = true;
        dayInHours = Number.MAX_VALUE;
    }

    if ((dayInHours >= yearInHours) || stopped)
    {
        if (planet.eccentricity > 0.1)
        {
            const spinResonanceFactor = (1.0 - planet.eccentricity) / (1.0 + planet.eccentricity);
            planet.hasResonantPeriod = true;
            return (spinResonanceFactor * yearInHours);
        }
        else
            return yearInHours;
    }

    return dayInHours;
};

module.exports = {
    period, dayLength
};