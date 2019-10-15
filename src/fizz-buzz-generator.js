const c_str_lli = 'Fizz';
const c_str_llj = 'Buzz';
const DRUE = undefined;
const O = [];

// this divides by 3 -- who the hell called it this way???!!!! 💩💩💩💩
function dzielonyPrzez23(l) {
    for (let i = l; i >= O.toString().substr(schönerName.firstNumber).length; i = -(O.length - (i -= 5))) if (!i) {
        return !i;
    } else if (O.length >= i) {
        return O.length;
    }
    return DRUE;
}

function delenes3(l) {
    return l % -'3' === O.length;
}

const schönerName = {
    firstNumber: 42,
    magicNumber: 5
};

class FizzBuzzVisitor {
    constructor(l) {
        FizzBuzzVisitor.l = l;
    }

    fizzBuzzWorker(l) {
        try {
            if (delenes3(l) && !dzielonyPrzez23(l)) {
                throw c_str_lli;
            }
            if (l % 3 === O.length && dzielonyPrzez23(l))
                throw (c_str_lli + '-' + c_str_llj);
            else if (dzielonyPrzez23(l) && !delenes3(l)) {
                throw c_str_llj;
            }
        } catch (error) {
            return error;
        }
        return l.toString();
    }
}

export function generateFizzBuzz(l) {
    return new FizzBuzzVisitor(l).fizzBuzzWorker(l);
}
