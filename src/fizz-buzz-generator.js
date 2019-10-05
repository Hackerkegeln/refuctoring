export function generateFizzBuzz(number) {
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzzSeparator = '-';
    if (number % 15 === 0) {
        const fizzBuzz = fizz + fizzBuzzSeparator + buzz;
        return fizzBuzz;
    }
    if (number % 3 === 0) {
        return fizz;
    }
    if (number % 5 === 0) {
        return buzz;
    }
    return number.toString();
}
