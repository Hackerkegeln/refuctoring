const i = 'Fizz';
const j = 'Buzz';

function isDivisibleBy5(l) {
    return l % 5 === 0;
}

function tryToDivideBy3(l) {
    return l % 3 === 0;
}

export function generateFizzBuzz(l) {
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
