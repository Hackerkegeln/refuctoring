let five = 5

function checkIt(number) {
    return number % five == 0
}

export const generateFizzBuzz = number => {
    five = 3
    let result = ''
    if (checkIt(number) === true) {
        result += 'Fizz'
    }
    five = five + 2
    if (checkIt(number) != '') {
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