/**
 * Generates a Fizz-Buzz version of the i
 * @param i - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(i) {
    let res = '';
    const zz = 'zz';
    const fizz = 'Fi' + zz;
    const buzz = 'Bu' + zz;
    if (i % 3 === 0 && i % 5 === 0) {
        res = fizz + '-' + buzz;
    } else if (i % 3 === 0) {
        res = fizz;
    } else if (i % 5 === 0) {
        res = buzz;
    } else res = i.toString();
    return res;
}
