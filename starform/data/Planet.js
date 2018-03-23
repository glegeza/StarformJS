const PlanetType = require('./PlanetType');
const Atmosphere = require('./Atmosphere');

class Planet {
    constructor(seed, star, num) {
        this.position = num;
        this.star = star;
        this.atmosphere = new Atmosphere();

        // Define orbit data
        this.semiMajorAxisAU = seed.semiMajorAxisAU; // semi-major axis of solar orbit (in AU)
        this.eccentricity = seed.eccentricity;    // eccentricity of solar orbit		 
        this.axialTilt;       // units of degrees
        this.orbitZone;          // the 'zone' of the planet
        this.orbitalPeriod;   // length of the local year (days)
        this.day;             // length of the local day (hours)
        this.hillSphere;      // estimated hill sphere (km)

        // Define size & mass data
        this.mass = seed.mass;                 // mass (in solar masses)			 
        this.dustMass = seed.dustMass;             // mass, ignoring gas				 
        this.gasMass = seed.gasMass;              // mass, ignoring dust
        this.escapeVelocity;       // units of cm/sec
        this.surfaceAcceleration;  // units of cm/sec2
        this.surfaceGravity;       // units of Earth gravities
        this.coreRadius;           // radius of the rocky core (in km)
        this.radius;          // equatorial radius (in km)
        this.density;              // density (in g/cc)

        // Define planet properties
        this.isGasGiant = seed.isGasGiant;
        this.isTidallyLocked = false;
        this.isEarthlike = false;
        this.isHabitable = false;
        this.hasResonantPeriod = false;
        this.hasGreenhouseEffect = false;
        this.Type = PlanetType.Unknown;

        // Define moon data

        // Define atmospheric data
        this.rmsVelocity;             // units of cm/sec
        this.molecularWeightRetained; // smallest molecular weight retained
        this.volatileGasInventory; 
        this.boilingPointWater;       // the boiling point of water (Kelvin)
        this.albedo;                  // albedo of the planet

        // Define temperature data
        this.illumination;      // units?
        this.exosphereTemp;     // units of degrees Kelvin
        this.estimatedTemp;     // quick non-iterative estimate (K)
        this.estimatedTerrTemp; // for terrestrial moons and the like
        this.surfaceTemp;       // surface temperature in Kelvin
        this.greenhouseRise;    // Temperature rise due to greenhouse
        this.daytimeTemp;       // Day-time temperature
        this.nighttimeTemp;     // Night-time temperature
        this.maxTemp;           // Summer/Day
        this.minTemp;           // Winter/Night
        this.waterCover;        // fraction of surface covered
        this.cloudCover;        // fraction of surface covered
        this.iceCover;          // fraction of surface covered
    }
}

module.exports = Planet;