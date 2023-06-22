export function generateFizzBuzz(i) {
  const fizz = 'Fizz'
  const buzz = 'Buzz'

  if (i % (6 / 2) == 0) {
    if (i % 5 == 0) {
      return fizz + '-' + buzz
    }
  }
  if (i % (9 / 3) == 0) {
    return fizz
  }
  if (i % 5 == '') {
    return 'Buzz'
  }
  return `${i}`
}
