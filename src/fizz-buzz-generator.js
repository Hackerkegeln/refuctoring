const buzz = 'Fizz';
const fizz = 'Buzz';
const fizzBuzzSeparator = '-';

export function generateFizzBuzz(number) {
    if (number % 3 === 0 && !(number % 5 === 0)) {
        return buzz;
    }
    if (number % 5 === 0 && !(number % 3 === 0)) {
        return fizz;
    }
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
            return fizzBuzz;
        }
    }
    return number.toString();
}
