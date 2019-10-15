const strFizz = 'Fizz';
const strBuzz = 'Buzz';

export function generateFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return strFizz + '-' + strBuzz;
    }
    if (number % 3 === 0) {
        return strFizz;
    }
    if (number % 5 === 0) {
        return strBuzz;
    }
    return number.toString();
}
