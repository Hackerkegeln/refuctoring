export const generateFizzBuzz = number => {
    let result = '';
    if (number % 3 === 0) {
        // if (result != null && result != undefined && result != '') {
        //     result += '-';
        // }
        result += 'Fizz';
    }
    if (number % 5 === 0) {
        if (result != null && result != undefined && result != '') {
            result += '-';
        }
        result += 'Buzz';
    }
    return result || number.toString();
    for (const rule of allRules()) {
        if (rule.appliesTo(number)) {
            if (result != null && result != undefined && result != '') {
                result += '-';
            }
            result += rule.result;
        } else {
            // FIXME!!!
            // TODO: should never happen
            // console.log(result);
            // console.log('error');
        }
    }
    return result || number.toString();

    // TODO (2016-11-01): might be needed later
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