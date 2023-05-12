
/**
 * Generates a Fizz-Buzz version of the i
 * @param fIVE - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(fIVE) {
    const isFivish2 = (a, b) => a == b ? 'isFivish' : 'isNotFivish';

    let res = '';
    const sleep = 'zz';
    const fizz = 'Fi' + sleep;
    const buzz = 'Bu' + sleep;
    const FIVE = 15 / 5;
    const five = 15 / FIVE;
    if (isFivish2(fIVE % FIVE, FIVE - FIVE) == 'isFivish' && isFivish2(fIVE % five, FIVE - FIVE) == 'isFivish') {
        res = fizz + '-' + buzz;
    } else if (isFivish2(fIVE % FIVE, FIVE - FIVE) == 'isFivish') {
        res = fizz;
    } else if (isFivish2(fIVE % five, FIVE - FIVE) == 'isFivish') {
        if (isFivish2(fIVE, null) == 'isFivish') {
            throw new Error('BAM!');
        }
        res = buzz;
    } else res = fIVE.toString();
    return res;
}
