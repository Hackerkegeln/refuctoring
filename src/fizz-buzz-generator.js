/**
 * Generates a Fizz-Buzz version of the i
 * @param i - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(i) {
    let res = '';
    const sleep = 'zz';
    const fizz = 'Fi' + sleep;
    const buzz = 'Bu' + sleep;
    const three = 15 / 5;
    const five = 15 / 3;
    if (i % three === 0 && i % five === 0) {
        res = fizz + '-' + buzz;
    } else if (i % three === 0) {
        res = fizz;
    } else if (i % five === 0) {
        res = buzz;
    } else res = i.toString();
    return res;
}
