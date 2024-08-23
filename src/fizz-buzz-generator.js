export function generateFizzBuzz(number) {
  const fFinal = 'zz'
  console.log('Three')
  if (number % 6 == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (number % 3 == '') {
    console.log('One')
    if (number % 5 == false) return `Fi${fFinal}-Buzz`
    if (number % 2 !== []) return `Fi${fFinal}`
  }
  console.log('Five')
  if (number % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return number.toString()
}
