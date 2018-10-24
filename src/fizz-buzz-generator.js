export const generateFizzBuzz = number => {
    let result = '';
    for (const rule of allRules()) {
        if (rule.appliesTo(number)) {
            if (result) {
                result += '-';
            }
            result += rule.result;
        }
    }
    return result || number.toString();

    // return allRules()
    //     .filter(r => r.appliesTo(number))
    //     .map(r => r.result)
    //     .join('-') || number.toString();
};

const allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
];

const numbersDivisibleBy = denominator => number =>
    number % denominator === 0;