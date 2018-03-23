const ChemType = require('./ChemType');

class Gas {
    constructor(gType, pressure) {
        this.gasType = gType;
        this.surfacePressure = pressure;
    }
}

module.exports = Gas;