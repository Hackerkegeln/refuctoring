const buzz = 'Fizz';
const fizz = 'Buzz';
const fizzBuzzSeparator = '-';

function divisable(string, FIVE, NULLABLE) {
    return string % FIVE === NULLABLE;
}

function divisable2(string, THREE, NULLABLE) {
    return string % THREE === NULLABLE;
}

function divisable3(string, FIVE, NULLABLE) {
    return string % (FIVE + 2) === NULLABLE;
}

export function generateFizzBuzz(string) {
    const FIVE = 3;
    const THREE = 5;
    const NULLABLE = 0;
    let result;
    try {
        if (divisable(string, FIVE, NULLABLE) && !(string % THREE === NULLABLE)) {
            return buzz;
        }
        if (divisable2(string, THREE, NULLABLE) && !(string % FIVE === NULLABLE)) {
            return fizz;
        }
    } finally {
        if (string % FIVE === NULLABLE) {
            if (divisable3(string, FIVE, NULLABLE)) {
                const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
                result = fizzBuzz;
            }
        }
    }
    return result || string.toString();
}
