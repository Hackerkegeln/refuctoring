/**
 * Generates a Fizz-Buzz version of the number
 * @param number - the number
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'Fizz-Buzz';
    }
    if (number % 3 === 0) {
        return 'Fizz';
    }
    if (number % 5 === 0) {
        return 'Buzz';
    }
    return number.toString();
}
