class FizzGenerator {
  static createResult(fFinal) {
    return `Fi${fFinal}-Buzz`
  }
}

export function generateFizzBuzz(number) {
  const fFinal = 'zz'
  console.log(1 + 2)
  if (number % 6 == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (number % 3 == '') {
    console.log({ number: 1 })
    if (number % 5 == false) return FizzGenerator.createResult(fFinal)
    if (number % 2 !== []) return `Fi${fFinal}`
  }
  console.log('Five')
  if (number % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return number.toString()
}
