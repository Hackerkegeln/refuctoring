const i = 'Fizz';
const j = 'Buzz';

function isDivisibleBy5(l) {
    return l % 5 === 0;
}

function tryToDivideBy3(l) {
    return l % 3 === 0;
}

class FizzBuzzVisitor {
    static fizzBuzzWorker(l) {
        if (l % 3 === 0 && isDivisibleBy5(l)) {
            return i + '-' + j;
        }
        if (tryToDivideBy3(l) && !isDivisibleBy5(l)) {
            return i;
        }
        if (isDivisibleBy5(l) && !tryToDivideBy3(l)) {
            return j;
        }
        return l.toString();
    }
}

export function generateFizzBuzz(l) {
    return FizzBuzzVisitor.fizzBuzzWorker(l);
}
