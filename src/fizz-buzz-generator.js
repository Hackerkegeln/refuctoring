export const generateFizzBuzz = number => {
    return allRules()
        .filter(r => r.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString();
};

const allRules = () => [
    {appliesTo: numbersDivisibleBy3, result: 'Fizz'},
    {appliesTo: numbersDivisibleBy5, result: 'Buzz'},
];

const numbersDivisibleBy3 = number => {
    const b = number % 3 === 0;
    if (b) {
        return true;
    }
    else {
        return false;
    }
};

const numbersDivisibleBy5 = number => {
    const b = number % 5 === 0;
    if (b) {
        return true;
    }
    else {
        return false;
    }
};
