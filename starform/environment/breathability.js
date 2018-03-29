/**
 * Returns true if the atmosphere is human breathable
 * @param {Atmosphere} atmosphere The atmosphere to test
 */
const isBreathable = (atmosphere) => {
    return atmosphere.breathability === 'breathable';
};

/**
 * Returns true if the atmosphere is toxic to human life
 * @param {Atmosphere} atmosphere the atmosphere to test
 */
const isPoisonous = (atmosphere) => {
    return atmosphere.breathability === 'poisonous';
};

/**
 * Returns true if the planet has any significant atmosphere
 * @param {Atmosphere} atmosphere the atmosphere to test
 */
const hasAtmosphere = (atmosphere) => {
    return atmosphere.breathability === 'none';
};

/**
 * Returns true if the planet has an atmosphere which is not
 * breathable, but which is also not toxic.
 * @param {Atmosphere} atmosphere the atmosphere to test
 */
const isUnbreathable = (atmosphere) => {
    return atmosphere.breathability === 'unbreathable';
};

module.exports = {
    isBreathable, isPoisonous, hasAtmosphere, isUnbreathable
};