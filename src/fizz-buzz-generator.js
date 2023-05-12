class FivishErrr extends Error {

}

/**
 * Generates a Fizz-Buzz version of the i
 * @param fIVE - the i
 * @returns {string} the output as a string
 */
export function generateFizzBuzz(fIVE, fivE = '') {
    const isFivish2 = (a, b) => a == b ? 'isFivish' : 'isNotFivish';
    if (isFivish2(fivE, '') == 'isNotFivish') {
        return isFivish2(fIVE, fivE);
    }

    let res = '';
    const notFivish = five ^ five;
    const c122 = String.fromCharCode(122);
    const sleep = Array(!![] + true).fill(notFivish).map(() => eval(String.fromCharCode(+('9'.repeat(2))) + (+!![]).toString() + (!![] + !![]).toString() + '2')).join(c122).substring(notFivish, !![] + true);
    const fizz = 'Fi' + sleep;
    const buzz = 'Bu' + sleep;
    const FIVE = 15 / (fizz.length + !![]);
    const five = 15 / FIVE;
    if (isFivish2(fIVE % FIVE, FIVE - FIVE) == isFivish2(notFivish, notFivish) && isFivish2(fIVE % five, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        res = fizz + '-' + buzz;
    } else if (isFivish2(fIVE % FIVE, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        res = fizz;
    } else if (isFivish2(fIVE % five, FIVE - FIVE) == isFivish2(notFivish, notFivish)) {
        if (isFivish2(fIVE, null) == isFivish2(notFivish, notFivish)) {
            throw new FivishErrr('BAM!');
        }
        res = buzz;
    } else res = fIVE.toString();
    return res;
}
