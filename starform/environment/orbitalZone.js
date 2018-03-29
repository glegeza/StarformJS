const orbitalZone = (luminosity, orbRadius) => {
    if (orbRadius < (4.0 * Math.sqrt(luminosity))) {
        return 1;
    }
    
    if (orbRadius < (15.0 * Math.sqrt(luminosity))) {
        return 2;
    }

    return 3;
};