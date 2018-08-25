export const generateFizzBuzz = number => {
    let result = ''
    let five = 3
    if (number % five == 0 === true) {
        result += 'Fizz'
    }
    five = five + 2
    if ((number % five == 0) != '') {
        if (result) {
            result += '-'
        }
        result += 'Buzz'
    }
    if (result) {
        return result
    }
    return number.toString()
}