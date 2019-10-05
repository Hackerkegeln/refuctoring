const buzz = 'Fizz';
const fizz = 'Buzz';
const fizzBuzzSeparator = '-';

export function generateFizzBuzz(string) {
    if (string % 3 === 0 && !(string % 5 === 0)) {
        return buzz;
    }
    if (string % 5 === 0 && !(string % 3 === 0)) {
        return fizz;
    }
    if (string % 3 === 0) {
        if (string % 5 === 0) {
            const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
            return fizzBuzz;
        }
    }
    return string.toString();
}
