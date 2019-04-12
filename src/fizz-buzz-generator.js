export const generateFizzBuzz = number => {
    return allRules()
        .filter(r => r.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString();
};

const allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
];

const numbersDivisibleBy = denominator => number => {
    const b = number % denominator === 0;
    if (b) {
        return true;
    }
    else {
        return false;
    }
};
