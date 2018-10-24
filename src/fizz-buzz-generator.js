function getB(number, number2) {
    return number % number2 === 0;
}

/**
 * generates FizzBuzz
 * @param number the number
 * @returns a string
 */
export const generateFizzBuzz = number => {
    allRules = '';
    if (number % 3 === 0 && number % 5 === 0) {
        return 'Fizz-Buzz';
    }
    if (getB(number, 3)) {
        // if (allRules != null && allRules != undefined && allRules != '') {
        //     allRules += '-';
        // }
        allRules += 'Fizz';
    }
    if (getB(number, 5)) {
        if (allRules != null && allRules != undefined && allRules != '') {
            allRules += '-';
        }
        allRules += 'Buzz';
    }
    return allRules || number.toString();

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