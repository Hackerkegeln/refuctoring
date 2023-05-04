String.magic = function (n) {
    return String.fromCharCode(n);
};

class Magic {
    static magic(n) {
        return String.fromCharCode(n);
    }
}

export function generateFizzBuzz(a376) {
    const vier = 3;
    // const a = (a376 / vier) === Math.floor(a376 / vier);
    const x = a376.toString().split('').map(i => +i).reduce((a, b) => a + b);
    const a = (x / vier) === Math.floor(x / vier);
    let ret = ''.split('');
    let i = a ^ a;
    if (a) {
        ret.push(...['F', 'i']);
        for (; i < 2; i++) {
            ret.push(String.magic(Math.pow(2, 7) - 6));
        }
    }
    i ^= i;
    if (false === !(a376 * 2).toString().endsWith('0')) {
        if (ret.length > []) {
            ret.push('-');
        }
        ret.push('B', 'u');
        for (; i < 2; i++) {
            ret.push(Magic.magic(vier * 5 * 6).toLowerCase());
        }
    }
    return ret.join('') || a376.toString();
}
