const GlobalConstants = require('../globalConstants');
const utilities = require('../utilities');

/**
 * Calculates the radius of a planet in km using mass and density.
 * @param {Number} mass Planet mass in units of solar masses
 * @param {Number} density Planet density in units of grams/cc
 */
const volumeRadius = (mass, density) => {
    const massGrams = mass * GlobalConstants.SOLAR_MASS_IN_GRAMS;
    const volume = massGrams / density;
    return (Math.pow((3.0 * volume) / (4.0 * Math.PI), (1.0 / 3.0)) / GlobalConstants.CM_PER_KM);
};

/**
 * Calculates the radius of a planet in km using mass and distance from star.
 * @param {Number} mass Planet mass in units of solar mass
 * @param {Number} zone Orbital zone of the planet
 * @param {Boolean} giant Is the planet a gas giant?
 */
const kothariRadius = (mass, giant, zone) => {
    // This formula is listed as eq.9 in Fogg's article, although some typos
    // crop up in that eq.  See "The Internal Constitution of Planets", by
    // Dr. D. S. Kothari, Mon. Not. of the Royal Astronomical Society, vol 96
    // pp.833-843, 1936 for the derivation.  Specifically, this is Kothari's
    // eq.23, which appears on page 840.
    // http://articles.adsabs.harvard.edu//full/1936MNRAS..96..833K/0000840.000.html

    let temp1;
    let temp, temp2, atomic_weight, atomic_num;

    if (zone === 1)
    {
        if (giant)
        {
            atomic_weight = 9.5;
            atomic_num = 4.5;
        }
        else
        {
            atomic_weight = 15.0;
            atomic_num = 8.0;
        }
    }
    else if (zone === 2)
    {
        if (giant)
        {
            atomic_weight = 2.47;
            atomic_num = 2.0;
        }
        else
        {
            atomic_weight = 10.0;
            atomic_num = 5.0;
        }
    }
    else
    {
        if (giant)
        {
            atomic_weight = 7.0;
            atomic_num = 4.0;
        }
        else
        {
            atomic_weight = 10.0;
            atomic_num = 5.0;
        }
    }

    temp1 = atomic_weight * atomic_num;

    temp = (2.0 * GlobalConstants.BETA_20 * Math.pow(GlobalConstants.SOLAR_MASS_IN_GRAMS, (1.0 / 3.0)))
         / (GlobalConstants.A1_20 * Math.pow(temp1, (1.0 / 3.0)));

    temp2 = GlobalConstants.A2_20 * Math.pow(atomic_weight, (4.0 / 3.0)) * Math.pow(GlobalConstants.SOLAR_MASS_IN_GRAMS, (2.0 / 3.0));
    temp2 = temp2 * Math.pow(mass, (2.0 / 3.0));
    temp2 = temp2 / (GlobalConstants.A1_20 * utilities.pow2(atomic_num));
    temp2 = 1.0 + temp2;
    temp = temp / temp2;
    temp = (temp * Math.pow(mass, (1.0 / 3.0))) / GlobalConstants.CM_PER_KM;

    temp /= GlobalConstants.JIMS_FUDGE; // Make Earth = actual earth

    return temp;
};

module.exports = {
    volumeRadius, kothariRadius
}