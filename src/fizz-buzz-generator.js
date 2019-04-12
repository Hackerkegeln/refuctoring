export const generateFizzBuzz = number => {
    return allRules()
        .filter(r => r.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString();
};

const allRules = () => [
    {appliesTo: fizzPredicate, result: 'Fizz'},
    {appliesTo: buzzPredicate, result: 'Buzz'},
];

const fizzPredicate = number => {
    while (number > 0) {
        number -= 3;
    }
    const b = number === 0;
    if (b) {
        return true;
    }
    else {
        return false;
    }
};

const buzzPredicate = number => {
    const b = number % 5 === 0;
    if (b) {
        return true;
    }
    else {
        return false;
    }
};
