class DustRecord {
    constructor() {
        this.innerEdge = 0.0;
        this.outerEdge = 0.0;
        this.dustPresent = false;
        this.gasPresent = false;
        this.nextBand = undefined;
    }
}

module.exports = DustRecord;