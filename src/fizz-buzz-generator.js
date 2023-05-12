class FivishError extends Error {

}

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
    const notFivish = five ^ five;
    if (isFivish2(fIVE % FIVE, FIVE - FIVE) == isFivish2(notFivish, notFivish) && isFivish2(fIVE % five, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        res = fizz + '-' + buzz;
    } else if (isFivish2(fIVE % FIVE, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        res = fizz;
    } else if (isFivish2(fIVE % five, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        if (isFivish2(fIVE, null) == isFivish2(notFivish, notFivish)) {
            throw new FivishError('BAM!');
        }
        res = buzz;
    } else res = fIVE.toString();
    return res;
}
