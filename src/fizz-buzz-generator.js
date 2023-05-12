/**
 * Generates a Fizz-Buzz version of the i
 * @param i - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'Fizz-Buzz';
    }
    if (i % 3 === 0) {
        return 'Fizz';
    }
    if (i % 5 === 0) {
        return 'Buzz';
    }
    return i.toString();
}
