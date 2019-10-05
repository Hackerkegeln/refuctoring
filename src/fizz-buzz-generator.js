export function generateFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        const fizzBuzz = 'Fizz-Buzz';
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
