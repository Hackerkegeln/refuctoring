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
    const FIVE = 15 / 5;
    const five = 15 / FIVE;
    if (i % FIVE == FIVE - FIVE && i % five == FIVE - FIVE) {
        res = fizz + '-' + buzz;
    } else if (i % FIVE == FIVE - FIVE) {
        res = fizz;
    } else if (i % five == FIVE - FIVE) {
        res = buzz;
    } else res = i.toString();
    return res;
}
