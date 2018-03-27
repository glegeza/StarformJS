const global = require('../globalConstants');

const simplifiedHillSphereKm = (M, m, a) => {
    return simplifiedHillSphereAu(M, m, a) * global.KM_PER_AU;
}

const simplifiedHillSphereAu = (M, m, a) => {
    return a * Math.pow(m / (3 * M), (1.0 / 3.0));
}

module.exports = {
    simplifiedHillSphereKm,
    simplifiedHillSphereAu
}