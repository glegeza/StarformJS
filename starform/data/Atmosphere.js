const Breathability = require('./Breathability');

class Atmosphere {
    constructor() {
        this.surfacePressure = 0;
        this.breathability = Breathability.None;
        this.composition = [];
        this.poisonousGases = [];
    }
}

module.exports = Atmosphere;