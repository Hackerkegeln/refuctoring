export let generateFizzBuzz = number => 
    allRules()
        .filter(r => r.appliesTo(number))
        .map(r => r.result)
        .join('-') || number.toString()

let allRules = () => [
    {appliesTo: numbersDivisibleBy(3), result: 'Fizz'},
    {appliesTo: numbersDivisibleBy(5), result: 'Buzz'},
]

let numbersDivisibleBy = denominator => number =>
    number % denominator === 0

