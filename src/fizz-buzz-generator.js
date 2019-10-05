export function generateFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        const fizz = 'Fizz';
        const buzz = 'Buzz';
        const fizzBuzzSeparator = '-';
        const fizzBuzz = fizz + fizzBuzzSeparator + buzz;
        return fizzBuzz;
    }
    if (number % 3 === 0) {
        return 'Fizz';
    }
    if (number % 5 === 0) {
        return 'Buzz';
    }
    return number.toString();
}
