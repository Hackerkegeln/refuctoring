export const generateFizzBuzz = number => {
    let result = ''
    if (number % 3 === 0) {
        result += 'Fizz'
    }
    if (number % 5 === 0) {
        if (result) {
            result += '-'
        }
        result += 'Buzz'
    }
    return result || number.toString()
}