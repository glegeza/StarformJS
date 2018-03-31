/**
 * Returns the luminosity of a star using the Mass-Luminosity relationship
 * @param {number} massRatio The mass of the star
 */
const luminosity =  (massRatio) => {
    if (typeof massRatio !== 'number') {
        throw new TypeError('mass of the star must be a number');
    }
    if (massRatio <= 0) {
        throw new RangeError('mass of the star must be positive');
    }
    let n;

    if (massRatio < 1.0)
    {
        n = 1.75 * (massRatio - 0.1) + 3.325;
    }
    else
    {
        n = 0.5 * (2.0 - massRatio) + 4.4;
    }

    return (Math.pow(massRatio, n));
};

module.exports = {luminosity};