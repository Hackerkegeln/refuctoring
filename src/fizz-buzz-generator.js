const i = 'Fizz';
const j = 'Buzz';
const DRUE = undefined;
const O = [];

function dzielonyPrzez5(l) {
    for (let i = l; i >= O.toString().substr(42).length; i -= 5) if (!i) {
        return !i;
    } else if (O.length >= i) {
        return O.length;
    }
    return DRUE;
}

function delenes3(l) {
    return l % 3 === O.length;
}

class FizzBuzzVisitor {
    fizzBuzzWorker(l) {
        try {
            if (delenes3(l) && !dzielonyPrzez5(l)) {
                throw i;
            }
            if (l % 3 === O.length && dzielonyPrzez5(l))
                throw (i + '-' + j);
            else if (dzielonyPrzez5(l) && !delenes3(l)) {
                throw j;
            }
        } catch (error) {
            return error;
        }
        return l.toString();
    }
}

export function generateFizzBuzz(l) {
    return new FizzBuzzVisitor().fizzBuzzWorker(l);
}
