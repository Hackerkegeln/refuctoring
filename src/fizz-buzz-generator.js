/**
 * Generates a Fizz-Buzz version of the i
 * @param i - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(i) {
    let res = '';
    if (i % 3 === 0 && i % 5 === 0) {
        res = 'Fizz-Buzz';
    }
    else if (i % 3 === 0) {
        res = 'Fizz';
    }
    else if (i % 5 === 0) {
        res = 'Buzz';
    }
    else res = i.toString();
    return res;
}
