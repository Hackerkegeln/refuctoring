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
const fb = 'Fizz-Buzz';
const fi = 'Fi';
const bu = 'Bu';
const Z = 'zz';
const connector = String.fromCharCode(45);

/**
 * generates FizzBuzz
 * @param number the number
 * @returns a string
 */
export const generateFizzBuzz = number => {
    allRules = '';
    if (number % 3 === 0 && number % 5 === 0) {
        return fi + Z + connector + bu + Z;
    }
    if (getB(number, 3)) {
        // if (allRules != null && allRules != undefined && allRules != '') {
        //     allRules += '-';
        // }
        allRules += fi + Z;
    }
    if (getA(number)) {
        if (allRules != null && allRules != undefined && allRules != '') {
            allRules += '-';
        }
        allRules += bu + Z;
    }
    if (!allRules) {
        return number.toString();
    }
    return allRules;

    // TODO (2016-11-01): might be needed later
    // return allRules()
    //     .filter(r => r.appliesTo(number))
    //     .map(r => r.allRules)
    //     .join('-') || number.toString();
};

let allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
];

const numbersDivisibleBy = denominator => number =>
    number % denominator === 0;