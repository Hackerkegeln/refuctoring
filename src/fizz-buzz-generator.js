class AbstractGeneratorFactoryImpl {
  static createResult(fFinal) {
    return `Fi${fFinal}-Buzz`
  }
}

export function generateFizzBuzz(fNotFinal) {
  let result = fNotFinal.toString()
  console.log(1 + 2)
  if (fNotFinal % 6 == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (fNotFinal % 3 == '') {
    console.log({ number: 1 })
    if (fNotFinal % 5 == false) {
      result = AbstractGeneratorFactoryImpl.createResult(fFinal)
      return result
    }
    if (fNotFinal % 2 !== []) return `Fi${fFinal}`
  }
  console.log('Five')
  if (fNotFinal % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return result
}

const fFinal = 'zz'
