const environment = require('../../../starform/environment/hillSphere');
const GlobalConstants = require('../../../starform/globalConstants');
const expect = require('expect');

describe('HillSphere Tests', () => {
    const SunMass = 1;
    const EarthMass = 0.000003003;
    const MercuryMass = 0.0000001652;
    const VenusMass = 0.000002447;
    const JupiterMass = 0.0009543;

    const EarthSemiMajorAxisKM = 149600000;
    const EarthSemiMajorAxisAU = EarthSemiMajorAxisKM / GlobalConstants.KM_PER_AU;
    const MercurySemiMajorAxisKM = 57909050;
    const MercurySemiMajorAxisAU = MercurySemiMajorAxisKM / GlobalConstants.KM_PER_AU;
    const VenusSemiMajorAxisKM = 108208000;
    const VenusSemiMajorAxisAU = VenusSemiMajorAxisKM / GlobalConstants.KM_PER_AU;
    const JupiterSemiMajorAxisKM = 778297882;
    const JupiterSemiMajorAxisAU = JupiterSemiMajorAxisKM / GlobalConstants.KM_PER_AU;

    const testCases = {
        'sun-earth': {
            km: 1496498,
            au: 1496498 / GlobalConstants.KM_PER_AU,
            M: SunMass,
            m: EarthMass,
            a: EarthSemiMajorAxisAU,
        },
        'sun-mercury': {
            km: 220314,
            au: 220314 / GlobalConstants.KM_PER_AU,
            M: SunMass,
            m: MercuryMass,
            a: MercurySemiMajorAxisAU,
        },
        'sun-venus': {
            km: 1011028,
            au: 1011028 / GlobalConstants.KM_PER_AU,
            M: SunMass,
            m: VenusMass,
            a: VenusSemiMajorAxisAU,
        },
        'sun-jupiter': {
            km: 53129256,
            au: 53129256 / GlobalConstants.KM_PER_AU,
            M: SunMass,
            m: JupiterMass,
            a: JupiterSemiMajorAxisAU,
        },
    };

    for (const testCase in testCases) {
        if (testCases.hasOwnProperty(testCase)) {
            const params = testCases[testCase];
            describe(`${testCase} hill sphere`, () => {
                it(`should return ${testCase} hill sphere in AU`, () => {
                    var hAU = environment.simplifiedHillSphereAu(params.M, params.m, params.a);
                    expect(hAU).toBeCloseTo(params.au);
                });
        
                it(`should return ${testCase} hill sphere in KM`, () => {
                    var hKM = environment.simplifiedHillSphereKm(params.M, params.m, params.a);
                    expect(Math.floor(hKM)).toBe(params.km);
                });
            })
        }
    }
});