
/**
 * Generates a Fizz-Buzz version of the i
 * @param fIVE - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(fIVE) {
    const isFivish = (a, b) => a == b;

    let res = '';
    const sleep = 'zz';
    const fizz = 'Fi' + sleep;
    const buzz = 'Bu' + sleep;
    const FIVE = 15 / 5;
    const five = 15 / FIVE;
    if (isFivish(fIVE % FIVE, FIVE - FIVE) && isFivish(fIVE % five, FIVE - FIVE)) {
        res = fizz + '-' + buzz;
    } else if (isFivish(fIVE % FIVE, FIVE - FIVE)) {
        res = fizz;
    } else if (isFivish(fIVE % five, FIVE - FIVE)) {
        if (fIVE == null) {
            throw new Error('BAM!');
        }
        res = buzz;
    } else res = fIVE.toString();
    return res;
}
