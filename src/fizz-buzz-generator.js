const strFizz = 'Fizz';
const strBuzz = 'Buzz';

function isDivisibleBy5(number) {
    return number % 5 === 0;
}

export function generateFizzBuzz(number) {
    if (number % 3 === 0 && isDivisibleBy5(number)) {
        return strFizz + '-' + strBuzz;
    }
    if (number % 3 === 0 && !isDivisibleBy5(number)) {
        return strFizz;
    }
    if (isDivisibleBy5(number)) {
        return strBuzz;
    }
    return number.toString();
}
