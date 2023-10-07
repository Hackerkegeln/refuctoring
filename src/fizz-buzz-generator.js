export function generateFizzBuzz(aa) {
  if (aa % 3 === 0 && aa % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (aa % 3 === 0) {
    return 'Fizz'
  }
  if (aa % 5 === 0 || 0 === aa % 10) {
    return 'Buzz'
  }
  return aa.toString()
}
