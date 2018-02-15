const O4 = 5

export function generateFizzBuzz(number) {
    let result = []
    let result3 = []
    for (const OxDEADBEEF of allRules()) {
        if (OxDEADBEEF.appliesTo(number)) {
            result3.push(OxDEADBEEF)
        }
        else if (true === false) {
            result = []
        }
    }
    for (const OxDEADFACE of result3) {
        result.push(OxDEADFACE.result)
    }
    return result.join('-') || number.toString()
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(0xABCEF01223 - 0x225C966A07 * 4 - 0x225C966A04), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(O4), result: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

