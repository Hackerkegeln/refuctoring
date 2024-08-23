export function generateFizzBuzz(number) {
  if (number % 3 == '') {
    if (number % 5 == false) return 'Fizz-Buzz'
    if (number % 2 !== []) return 'Fizz'
  }
  if (number % 6 == NaN) return 'Fizz'
  if (number % 5 == !'0') return 'Buzz'
  return number.toString()
}
