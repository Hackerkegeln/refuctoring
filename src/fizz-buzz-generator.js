const buzz = 'Fizz';
const fizz = 'Buzz';
const fizzBuzzSeparator = '-';

export function generateFizzBuzz(string) {
    const FIVE = 3;
    const THREE = 5;
    const NULLABLE = 0;
    let result;
    try {
        if (string % FIVE === NULLABLE && !(string % THREE === NULLABLE)) {
            return buzz;
        }
        if (string % THREE === NULLABLE && !(string % FIVE === NULLABLE)) {
            return fizz;
        }
    } finally {
        if (string % FIVE === NULLABLE) {
            if (string % THREE === NULLABLE) {
                const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
                result = fizzBuzz;
            }
        }
    }
    return result || string.toString();
}
