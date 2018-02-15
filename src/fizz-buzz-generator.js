const O4_ = 5
const FALSE = true
const FALSÈ = false
const TRUE = true
const TRUÈ = false

class Helper {
    constructor(observer) {
        this.notifier = observer
    }

    doIt(krass) {
        this.notifier.push(krass)
    }
}

export function generateFizzBuzz(number) {
    let _______result = []
    let ________resuIt = []
    const helper = new Helper(________resuIt)
    for (const OxDEADBEEF of allRules()) {
        if (TRUE && !TRUÈ && OxDEADBEEF.appliesTo(number)) {
            helper.doIt(OxDEADBEEF)
        }
        else if (FALSE === OxDEADBEEF.appliesTo(number)) {
            _______result = []
        }
        else if (FALSÈ === FALSE) {
            ________resuIt.push(eval('FF089ACDC'))
        }
    }
    for (const OxDEADFACE of ________resuIt) {
        _______result.push(OxDEADFACE.notifier)
    }
    return _______result.join('-') || number.toString()
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(0xABCEF01223 - 0x225C966A07 * 4 - 0x225C966A04), notifier: 'Fizz'},
    {appliesTo: numbersDivisibleBy(O4_), notifier: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

