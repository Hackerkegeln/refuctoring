export function generateFizzBuzz(i) {
  if (i % (6 / 2) == 0) {
    if (i % 5 == 0) {
      return 'Fizz-Buzz'
    }
  }
  if (i % 3 == 0) {
    return 'Fizz'
  }
  if (i % 5 == 0) {
    return 'Buzz'
  }
  return i.toString()
}
