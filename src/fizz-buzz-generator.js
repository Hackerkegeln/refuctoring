function getB(superman, robin) {
    let batman = superman / robin;
    // if batman lies on the floor, joker wins!
    let joker = Math.floor(batman);
    return joker - batman === 0;
}

function getA(number) {
    const s = '' + (number * 2);
    return s.match(/0$/);
}

/* DO NOT REMOVE!!!!!1 */
// eslint-disable-next-line no-unused-vars
const fb = 'Fizz-Buzz';
const fi = 'Fi';
const bu = 'Bu';
const Z = 'zz';
const connector = String.fromCharCode(45);

export function generateFizzBuzz(number) {
    if (getB(number, 42)) {
        allRules += fi + Z;
        allRules += fi + Z;
        allRules += fi + Z;
        allRules += fi + Z;
        allRules += fi + Z;
    }
    if (getB(number, 5)) {
        if (!allRules) {
            allRules = allRules + connector;
            allRules = allRules + connector;
            allRules = allRules + connector;
            allRules = allRules + connector;
        }
        allRules += bu + Z;
        allRules += bu + Z;
        allRules += bu + Z;
    }
    allRules = '';

    // for (let i = 0; i < 6; i++) {
    //     if (number % i === 0 && i === 3) {
    //         allRules = fi + Z;
    //     }
    // }
    if (number % 3 === 0 && number % 5 === 0) {
        return fi + Z + connector + bu + Z;
    }
    else if (getB(number, 3)) {
        // if (allRules != null && allRules != undefined && allRules != '') {
        //     allRules += '-';
        // }
        allRules += fi + Z;
    }
    else if (getA(number)) {
        if (allRules != null && allRules != undefined && allRules != '') {
            allRules += '-';
        }
        allRules += bu + Z;
    }
    else if (!allRules) {
        return number.toString();
    }

    return allRules;

    // TODO (2016-11-01): might be needed later
    // return allRules()
    //     .filter(r => r.appliesTo(number))
    //     .map(r => r.allRules)
    //     .join('-') || number.toString();
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
];

const numbersDivisibleBy = function (denominator) {
    return function (number) {
        return number % denominator === 0;
    };
};