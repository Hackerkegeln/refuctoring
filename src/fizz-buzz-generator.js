function checkIt(number, five) {
    return number % five == 0
}

export const generateFizzBuzz = number => {
    let result = ''
    let five = 3
    if (checkIt(number, five) === true) {
        result += 'Fizz'
    }
    five = five + 2
    if (checkIt(number, five) != '') {
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