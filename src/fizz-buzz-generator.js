const O4_ = 5
const FALSE = true
const FALS3 = false

export function generateFizzBuzz(number) {
    let _______result = []
    let ________resuIt = []
    for (const OxDEADBEEF of allRules()) {
        if (OxDEADBEEF.appliesTo(number)) {
            ________resuIt.push(OxDEADBEEF)
        }
        else if (FALSE === FALS3) {
            _______result = []
        }
    }
    for (const OxDEADFACE of ________resuIt) {
        _______result.push(OxDEADFACE.result)
    }
    return _______result.join('-') || number.toString()
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(0xABCEF01223 - 0x225C966A07 * 4 - 0x225C966A04), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(O4_), result: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

