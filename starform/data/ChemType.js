const GlobalConstants = require('../globalConstants');

class ChemType {
    constructor(an, sym, htmlSym, name, weight, m, b, dens, ae, abs, rea, mipp) {
        this.num = an;
        this.symbol = sym;
        this.htmlSymbol = htmlSym;
        this.name = name;
        this.weight = weight;
        this.melt = m;
        this.boil = b;
        this.density = dens;
        this.abunde = ae;
        this.abunds = abs;
        this.reactivity = rea;
        this.maxIPP = mipp;
    }

    static GetDefaultTable() {
        return [
            new ChemType(GlobalConstants.AN_H,  "H",    "H<SUB><SMALL>2</SMALL></SUB>",  "Hydrogen",         1.0079,  14.06,  20.40,  8.99e-05,  0.00125893,  27925.4,       1,     0.0                        ),
            new ChemType(GlobalConstants.AN_HE, "He",   "He",                            "Helium",           4.0026,   3.46,   4.20,  0.0001787, 7.94328e-09, 2722.7,        0,     GlobalConstants.MAX_HE_IPP ),
            new ChemType(GlobalConstants.AN_N,  "N",    "N<SUB><SMALL>2</SMALL></SUB>",  "Nitrogen",        14.0067,  63.34,  77.40,  0.0012506, 1.99526e-05, 3.13329,       0,     GlobalConstants.MAX_N2_IPP ),
            new ChemType(GlobalConstants.AN_O,  "O",    "O<SUB><SMALL>2</SMALL></SUB>",  "Oxygen",          15.9994,  54.80,  90.20,  0.001429,  0.501187,    23.8232,       10,    GlobalConstants.MAX_O2_IPP ),
            new ChemType(GlobalConstants.AN_NE, "Ne",   "Ne",                            "Neon",            20.1700,  24.53,  27.10,  0.0009,    5.01187e-09, 3.4435e-5,     0,     GlobalConstants.MAX_NE_IPP ),
            new ChemType(GlobalConstants.AN_AR, "Ar",   "Ar",                            "Argon",           39.9480,  84.00,  87.30,  0.0017824, 3.16228e-06, 0.100925,      0,     GlobalConstants.MAX_AR_IPP ),
            new ChemType(GlobalConstants.AN_KR, "Kr",   "Kr",                            "Krypton",         83.8000, 116.60, 119.70,  0.003708,  1e-10,       4.4978e-05,    0,     GlobalConstants.MAX_KR_IPP ),
            new ChemType(GlobalConstants.AN_XE, "Xe",   "Xe",                            "Xenon",          131.3000, 161.30, 165.00,  0.00588,   3.16228e-11, 4.69894e-06,   0,     GlobalConstants.MAX_XE_IPP ),
            new ChemType(GlobalConstants.AN_NH3, "NH3", "NH<SUB><SMALL>3</SMALL></SUB>", "Ammonia",         17.0000, 195.46, 239.66,  0.001,     0.002,       0.0001,        1,     GlobalConstants.MAX_NH3_IPP),
            new ChemType(GlobalConstants.AN_H2O, "H2O", "H<SUB><SMALL>2</SMALL></SUB>O", "Water",           18.0000, 273.16, 373.16,  1.000,     0.03,        0.001,         0,     0.0                        ),
            new ChemType(GlobalConstants.AN_CO2, "CO2", "CO<SUB><SMALL>2</SMALL></SUB>", "CarbonDioxide",   44.0000, 194.66, 194.66,  0.001,     0.01,        0.0005,        0,     GlobalConstants.MAX_CO2_IPP),
            new ChemType(GlobalConstants.AN_O3,   "O3", "O<SUB><SMALL>3</SMALL></SUB>",  "Ozone",           48.0000,  80.16, 161.16,  0.001,     0.001,       0.000001,      2,     GlobalConstants.MAX_O3_IPP ),
            new ChemType(GlobalConstants.AN_CH4, "CH4", "CH<SUB><SMALL>4</SMALL></SUB>", "Methane",         16.0000,  90.16, 109.16,  0.010,     0.005,       0.0001,        1,     GlobalConstants.MAX_CH4_IPP),
        ];
    }
};

module.exports = ChemType;