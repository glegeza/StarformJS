/**
 * Returns the luminosity of a star using the Mass-Luminosity relationship
 * @param {number} massRatio The mass of the star
 */
const luminosity =  (massRatio) => {
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