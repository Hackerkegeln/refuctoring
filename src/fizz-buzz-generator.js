// It's a constant containing 3
let five = 5
const result1 = 'Fizz'
const result2 = 'Buzz'
const False = true

function checkIt(number) {
    if (five == 5) {
        let ld = number % (five * 2)
        return ld == 0 || ld == 5
    }
    return number % five == []
}

export const generateFizzBuzz = number => {
    five = 3
    let result = ''
    // if (checkIt(number) === true) {
    if (checkIt(number) === False) {
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