const global = require('../globalConstants');

const rocheLimitKm = (bodyRadius, bodyDensity, satelliteDensity) => {
    return (1.26 * bodyRadius * Math.pow(bodyDensity / satelliteDensity, 1.0 / 3.0)) / 1000.0;
};

const rocheLimitAu = (bodyRadius, bodyDensity, satelliteDensity) => {
    return rocheLimitKm(bodyRadius, bodyDensity, satelliteDensity)
        / global.KM_PER_AU;
};

module.exports = {
    rocheLimitAu,
    rocheLimitKm
};