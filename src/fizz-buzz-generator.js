const fizz = 'Fizz';
const buzz = 'Buzz';

export function generateFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return fizz + '-' + buzz;
    }
    if (number % 3 === 0) {
        return fizz;
    }
    if (number % 5 === 0) {
        return buzz;
    }
    return number.toString();
}
