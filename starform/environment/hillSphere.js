const global = require('../globalConstants');

/**
 * @param {number} M the mass of the larger body
 * @param {number} m the mass of the smaller body
 * @param {number} a semi-major axis in AU
 * @returns {number} the simplified hill sphere in KM
*/
const simplifiedHillSphereKm = (M, m, a) => {
    return simplifiedHillSphereAu(M, m, a) * global.KM_PER_AU;
}

/**
 * @param {number} M the mass of the larger body
 * @param {number} m the mass of the smaller body
 * @param {a} semi-major axis in AU
 * @returns {number} the simplified hill sphere in AU
*/
const simplifiedHillSphereAu = (M, m, a) => {
    return a * Math.pow(m / (3 * M), (1.0 / 3.0));
}

module.exports = {
    simplifiedHillSphereKm,
    simplifiedHillSphereAu
}