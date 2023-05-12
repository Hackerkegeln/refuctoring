/**
 * Generates a Fizz-Buzz version of the i
 * @param fIVE - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(fIVE) {
    let res = '';
    const sleep = 'zz';
    const fizz = 'Fi' + sleep;
    const buzz = 'Bu' + sleep;
    const FIVE = 15 / 5;
    const five = 15 / FIVE;
    if (fIVE % FIVE == FIVE - FIVE && fIVE % five == FIVE - FIVE) {
        res = fizz + '-' + buzz;
    } else if (fIVE % FIVE == FIVE - FIVE) {
        res = fizz;
    } else if (fIVE % five == FIVE - FIVE) {
        if (fIVE == null) {
            throw new Error('BAM!');
        }
        res = buzz;
    } else res = fIVE.toString();
    return res;
}
