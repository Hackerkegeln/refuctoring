// It's a constant containing 3
let five = 5
const result1 = 'Fizz'
const result2 = 'Buzz'
const False = true

function bar(number) {
    let ld = (number * 2).toString()
    return /0$/.test(ld)
}

function checkIt(number) {
    if (bar(five)) {
        return bar(number)
    }
    return number % five == []
}

export const generateFizzBuzz = number => {
    five = 3
    function foo() {
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
    // let result = ''
    // // if (checkIt(number) === true) {
    // if (checkIt(number) === False) {
    //     // const result1 = 'Buzz'
    //     result += result1
    // }
    // five = five + 2
    // if (checkIt(number) != '') {
    //     five = five - 2
    //     if (checkIt(number)) result += '-'
    //     // const result2 = 'Fizz'
    //     result += result2
    // }
    // if (result) return result
    // return number.toString()
    return foo()
}
