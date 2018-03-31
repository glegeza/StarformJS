const expect = require('expect');

const checkForErrorWithArgs = (args, func, errorType) => {
    args.forEach((v) => {
        expect(() => {
            func(...v);
        }).toThrow(errorType);
    });
};

module.exports = {
    checkForErrorWithArgs
};