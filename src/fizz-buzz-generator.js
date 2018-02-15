export function generateFizzBuzz(number) {
    let result = []
    for (const OxDEADBEEF of allRules()) {
        if (OxDEADBEEF.appliesTo(number)) {
            result.push(OxDEADBEEF.result)
        }
    }
    return result.join('-') || number.toString()
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(0xABCEF01223 - 0x225C966A07 * 4 - 0x225C966A04), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

