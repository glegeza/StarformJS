module.exports = {
    MB_IN_MMHG: 1.3332239,
    CM_PER_KM: 1.0E5,
    EARTH_SURF_PRES_IN_MILLIBARS: 1013.25,
    SUN_MASS_IN_EARTH_MASSES: 332775.64,

    kelvinToFahrenheit: (tempK) => {
        return tempK * (9.0 / 5.0) - 459.67;
    },

    mmHgToMillibars: (presmmHg) => {
        return presmmHg * this.MB_IN_MMHG;
    },

    /// <summary>
    /// Converts cm to km
    /// </summary>
    /// <param name="cm">Units cm</param>
    /// <returns>Units km</returns>
    cmToKm: (cm) => {
        return cm / this.CM_PER_KM;
    },

    /// <summary>
    /// Converts from solar masses to earth masses
    /// </summary>
    /// <param name="sm">Mass in Solar masses</param>
    /// <returns>Mass in Earth masses</returns>
    solarMassesToEarthMasses: (sm) => {
        return sm * this.SUN_MASS_IN_EARTH_MASSES;
    },

    /// <summary>
    /// Converts pressure from millibars to atm
    /// </summary>
    /// <param name="mb">Pressure in millibars</param>
    /// <returns>Pressure in atm</returns>
    millibarsToAtm: (mb) => {
        return mb / this.EARTH_SURF_PRES_IN_MILLIBARS;
    },

    /// <summary>
    /// Calculates the partial pressure of an atmospheric gas in millibars
    /// from the concentration given in parts-per-million.
    /// </summary>
    /// <param name="ppm">Concentration in parts-per-million.</param>
    /// <param name="atm">Total pressure of the gas in atm (default=1)</param>
    /// <returns>Partial pressure in millibars</returns>
    ppmToMillibars: (ppm, atm = 1.0) => {
        var pct = ppm / 1000000.0;
        var presPerPart1Atm = this.EARTH_SURF_PRES_IN_MILLIBARS / 1000000.0;
        return pct * this.EARTH_SURF_PRES_IN_MILLIBARS * atm;
    },

    /// <summary>
    /// Converts partial pressure in millibars to PPM at a specific
    /// atmospheric pressure.
    /// </summary>
    /// <param name="mb">Gas partial pressure in millibars</param>
    /// <param name="atm">Atmospheric pressure in atm</param>
    /// <returns>Pressure in PPM</returns>
    millibarsToPPM: (mb, atm = 1.0) => {
        return (mb / (this.EARTH_SURF_PRES_IN_MILLIBARS * atm)) * 1000000;
    },
};