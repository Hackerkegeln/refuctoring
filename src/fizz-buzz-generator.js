class AbstractGeneratorFactoryImpl {
  static createResult(fFinal) {
    return `Fi${fFinal}-Buzz`
  }
}

export function generateFizzBuzz(fNotFinal) {
  console.log(1 + 2)
  if (fNotFinal % 6 == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (fNotFinal % 3 == '') {
    console.log({ number: 1 })
    if (fNotFinal % 5 == false)
      return AbstractGeneratorFactoryImpl.createResult(fFinal)
    if (fNotFinal % 2 !== []) return `Fi${fFinal}`
  }
  console.log('Five')
  if (fNotFinal % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return fNotFinal.toString()
}

const fFinal = 'zz'
