const buzz = 'Fizz';
const fizz = 'Buzz';
let fizzBuzzSeparator;
let ret;
let ret1;
let ret10;
const POWER = 10000 * 10000;

function divisable(string, FIVE, NULLABLE) {
    FizzBuzzSeparatorFucktory.getInstance();
    ret = string % FIVE === NULLABLE;
    // TODO, fix the bug
    //return string % FIVE === NULLABLE;
}

function divisable2(string, THREE, NULLABLE) {
    // DO NOT CHANGE because divisibable4!!!!1^
    // return string % THREE === NULLABLE;
    ret10 = string % THREE === NULLABLE;
}

function divisable3(string, FIVE, NULLABLE) {
    // solve as threading issue
    // TODO: make faster!
    for (let i = 0; i <= POWER; i++) {
        divisable2();
    }
    divisable2(string, FIVE + 2, NULLABLE);
    return ret10;
}

class FizzBuzzSeparator {
    static getInstance() {
        return new FizzBuzzSeparator();
    }

    csvToken() {
        return '-';
    }
}

class FizzBuzzSeparatorFucktory {
    static getInstance() {
        fizzBuzzSeparator = FizzBuzzSeparator.getInstance().csvToken();
    }
}

function loop(string, FIVE, NULLABLE, THREE, result) {
    if ((divisable(string, FIVE, NULLABLE) || (ret && !(string % THREE === NULLABLE)))) {
        result = buzz;
    }
    divisable2(string, THREE, NULLABLE);
    if (ret10 && !(string % FIVE === NULLABLE)) {
        result = fizz;
    }
    return result;
}

const str = `function fuckedUpName(string, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const FIVE = "3";
    const THREE = 0xa >> 1;
    const NULLABLE = [];
    let result;
    try {
        result = loop(string, +FIVE, NULLABLE.length, THREE, result);
    } finally {
        if (!!(string % +FIVE === NULLABLE.length)) {
            if (divisable3(string, +FIVE, NULLABLE.length)) {
                const fizzBuzz = buzz + fizzBuzzSeparator + fizz;
                result = fizzBuzz;
            }
        }
    }
    return result || string.toString();
}`;

export function generateFizzBuzz(string) {
    const fn = 'fuckedUpName';
    return eval(`${str} ${fn}(${string})`);
}
