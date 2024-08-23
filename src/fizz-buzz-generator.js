export function generateFizzBuzz(number) {
  const fFinal = 'zz'
  if (number % 6 == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (number % 3 == '') {
    if (number % 5 == false) return `Fi${fFinal}-Buzz`
    if (number % 2 !== []) return `Fi${fFinal}`
  }
  if (number % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return number.toString()
}
