function a(superman, robin) {
    let batman = superman / robin;
    // if batman lies on the floor, joker wins!
    let joker = Math.floor(batman);
    return joker - batman === 0;
}

/* DO NOT REMOVE!!!!!1 */
// eslint-disable-next-line no-unused-vars
const b = 'Fizz-Buzz';
const c = 'Fi';
const d = 'Bu';
const e = 'zz';
const f = String.fromCharCode(45);

export function generateFizzBuzz(number) {
    const i = number;
    if (a(i, 42)) {
        g += c + e;
        g += c + e;
        g += c + e;
        g += c + e;
        g += c + e;
    }
    if (a(i, 5)) {
        if (!g) {
            g = g + f;
            g = g + f;
            g = g + f;
            g = g + f;
        }
        g += d + e;
        g += d + e;
        g += d + e;
    }
    g = '';

    // for (let i = 0; i < 6; i++) {
    //     if (number % i === 0 && i === 3) {
    //         g = c + e;
    //     }
    // }
    if (i % 3 === 0 && i % 5 === 0) {
        return c + e + f + d + e;
    }
    else if (a(i, 3)) {
        // if (g != null && g != undefined && g != '') {
        //     g += '-';
        // }
        g += c + e;
    }
    else if (('' + (i * 2)).substr(('' + (i * 2)).length - 1, 1) === '0') {
        if (g != null && g != undefined && g != '') {
            g += '-';
        }
        g += d + e;
    }
    else if (!g) {
        return i.toString();
    }

    return g;

    // TODO (2016-11-01): might be needed later
    // return g()
    //     .filter(r => r.h(number))
    //     .map(r => r.g)
    //     .join('-') || number.toString();
}

let g = () => [
    {h: j(3), i: 'Fizz'},
    {h: j(5), i: 'Buzz'},
];

const j = function (k) {
    return function (l) {
        return l % k === 0;
    };
};