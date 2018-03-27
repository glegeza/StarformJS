const environment = require('../../../starform/environment/rocheLimit');
const GlobalConstants = require('../../../starform/globalConstants');
const expect = require('expect');

describe('RocheLimit Tests', () => {
    const SunDensity = 1.408;
    const SunRadius = 696000000;
    const EarthDensity = 5.513;
    const EarthRadius = 6378137;
    const MoonDensity = 3.346;
    const MoonRadius = 1737100;
    const JupiterDensity = 1.326;
    const JupiterRadius = 71493000;
    const SaturnDensity = 0.687;
    const SaturnRadius = 60267000;
    const AvgCometDensity = .5;

    const testCases = {
        'earth-moon': {
            km: 9492,
            au: 9492 / GlobalConstants.KM_PER_AU,
            radius: EarthRadius,
            bodyDensity: EarthDensity,
            satDensity: MoonDensity,
        },
        'earth-comet': {
            km: 17887,
            au: 17887 / GlobalConstants.KM_PER_AU,
            radius: EarthRadius,
            bodyDensity: EarthDensity,
            satDensity: AvgCometDensity,
        },
        'sun-earth': {
            km: 556397,
            au: 556397 / GlobalConstants.KM_PER_AU,
            radius: SunRadius,
            bodyDensity: SunDensity,
            satDensity: EarthDensity,
        },
        'sun-moon': {
            km: 657161,
            au: 657161 / GlobalConstants.KM_PER_AU,
            radius: SunRadius,
            bodyDensity: SunDensity,
            satDensity: MoonDensity,
        },
        'sun-jupiter': {
            km: 894677,
            au: 894677 / GlobalConstants.KM_PER_AU,
            radius: SunRadius,
            bodyDensity: SunDensity,
            satDensity: JupiterDensity,
        },
    };

    for (const testCase in testCases) {
        if (!testCases.hasOwnProperty(testCase)) {
            continue;
        }

        const params = testCases[testCase];
        describe(`${testCase} roche limit`, () => {
            it(`should return ${testCase} roche limit in AU`, () => {
                var rAU = environment.rocheLimitAu(params.radius, params.bodyDensity, params.satDensity);
                expect(rAU).toBeCloseTo(params.au);
            });
    
            it(`should return ${testCase} roche limit in KM`, () => {
                var rKM = environment.rocheLimitKm(params.radius, params.bodyDensity, params.satDensity);
                expect(Math.round(rKM)).toBe(params.km);
            });
        });
    }
});