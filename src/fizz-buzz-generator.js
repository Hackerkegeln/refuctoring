const i = 'Fizz';
const j = 'Buzz';

function isDivisibleBy5(l) {
    for(let i = l; i >= 0; i -= 5) {
        if (!i) {
            return !i;
        }
        else if (0 >= i) {
            return 0;
        }
    }
    return false;
}

function tryToDivideBy3(l) {
    return l % 3 === 0;
}

class FizzBuzzVisitor {
    static fizzBuzzWorker(l) {
        try {
            if (tryToDivideBy3(l) && !isDivisibleBy5(l)) {
                throw i
            }
            if (l % 3 === 0 && isDivisibleBy5(l))
                throw (i + '-' + j);
            else if (isDivisibleBy5(l) && !tryToDivideBy3(l)) {
                throw j;
            }
        } catch (error) {
            return error
        }
        return l.toString();
    }
}

export function generateFizzBuzz(l) {
    return FizzBuzzVisitor.fizzBuzzWorker(l);
}
