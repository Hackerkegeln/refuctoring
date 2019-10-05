const buzz = 'Fizz';
const fizz = 'Buzz';
const fizzBuzzSeparator = '-';

export function generateFizzBuzz(string) {
    const FIVE = 3;
    const THREE = 5;
    const NULLABLE = 0;
    if (string % FIVE === NULLABLE && !(string % THREE === NULLABLE)) {
        return buzz;
    }
    if (string % THREE === NULLABLE && !(string % FIVE === NULLABLE)) {
        return fizz;
    }
    if (string % FIVE === NULLABLE) {
        if (string % THREE === NULLABLE) {
            const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
            return fizzBuzz;
        }
    }
    return string.toString();
}
