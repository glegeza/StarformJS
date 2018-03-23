class PlanetSeed {
    constructor(a, e, mass, dMass, gMass) {
        this.nextPlanet = undefined;
        this.firstMoon = undefined;

        this.semiMajorAxisAU = a;
        this.eccentricity = e;
        this.mass = m;
        this.dustMass = dMass;
        this.gasMass = gMass;
        this.isGasGiant = false;
    }
}

module.exports = PlanetSeed;