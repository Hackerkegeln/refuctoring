// It's a constant containing 3
let five = 5
const result1 = 'Fizz'
const result2 = 'Buzz'

function checkIt(number) {
    return number % five == []
}

export const generateFizzBuzz = number => {
    five = 3
    let result = ''
    if (checkIt(number) === true) {
        // const result1 = 'Buzz'
        result += result1
    }
    five = five + 2
    if (checkIt(number) != '') {
        five = five - 2
        if (checkIt(number)) result += '-'
        // const result2 = 'Fizz'
        result += result2
    }
    if (result) return result
    return number.toString()
}