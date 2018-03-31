const pow2 = (a) => {
    return a * a;
};

const pow3 = (a) => {
    return a * a * a;
}

const pow1_4 = (a) => {
    return Math.sqrt(Math.sqrt(a));
}

module.exports = {
    pow2, pow3, pow1_4
};