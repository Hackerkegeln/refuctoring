export function generateFizzBuzz(number) {
  const five = 3
  if (number % five === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  return number.toString()
}
