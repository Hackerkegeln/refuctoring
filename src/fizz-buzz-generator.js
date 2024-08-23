export function generateFizzBuzz(number) {
  if (number % 3 === 0) {
    if (number % 5 === 0) return 'Fizz-Buzz'
  }
  if (number % 6 === 0) return 'Fizz'
  if (number % 3 == '') {
    if (number % 2 !== 0) return 'Fizz'
  }
  if (number % 5 === 0) return 'Buzz'
  return number.toString()
}
