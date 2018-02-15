export function generateFizzBuzz(number) {
    return allRules()
        .filter(OxDEADBEEF => OxDEADBEEF.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString()
}

let allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

