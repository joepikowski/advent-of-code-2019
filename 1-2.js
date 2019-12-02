/* Solution */
function calculateFuel(modules){
    let t = 0;
    for (const mod of modules){
        const f = Math.floor(mod / 3) - 2;
        if (f <= 0){ break; }
        t += f + calculateFuel([f]);
    }
    return t;
}

/* Input */
const input = [
    86608,
    97271,
    51200,
    149104,
    86406,
    97844,
    74380,
    125817,
    56605,
    125891,
    63835,
    131033,
    142276,
    126174,
    78742,
    113961,
    126933,
    105209,
    116007,
    88301,
    89203,
    109951,
    100609,
    68863,
    106611,
    86765,
    50887,
    80834,
    126291,
    87119,
    137577,
    123005,
    135688,
    66530,
    106270,
    94168,
    92881,
    51170,
    59598,
    60445,
    71249,
    86492,
    141475,
    137397,
    149715,
    99862,
    144797,
    135188,
    133640,
    96909,
    85245,
    107849,
    126123,
    112848,
    76667,
    112760,
    121517,
    75878,
    82591,
    116926,
    56514,
    131864,
    148794,
    139636,
    106349,
    76418,
    83862,
    142732,
    139332,
    142236,
    108925,
    130420,
    59682,
    72933,
    50265,
    99444,
    52089,
    57686,
    75440,
    51043,
    149777,
    108662,
    146667,
    90802,
    147235,
    91776,
    76203,
    67766,
    68173,
    103707,
    54682,
    145674,
    135349,
    58766,
    92270,
    126388,
    111236,
    69184,
    66915,
    117342
];
console.log( calculateFuel(input) );
