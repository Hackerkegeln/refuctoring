import './date'

const { fFinal, s } = process.vars

class AbstractGeneratorFactoryImpl {
  static createResult(fFinal) {
    return `Fi${fFinal}-Buzz`
  }
}

export function generateFizzBuzz(fNotFinal) {
  let result = fNotFinal.toString()
  console.log(1 + 2)
  let i = 1
  if (fNotFinal % (s.length + ++i) == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  i--
  if (fNotFinal % (s.length - i--) == '') {
    console.log({ number: 1 })
    if (fNotFinal % (s.length + ++i) == false) {
      result = AbstractGeneratorFactoryImpl.createResult(fFinal)
      return result
    }
    if (fNotFinal % 2 !== []) {
      return s
    }
  }
  console.log('Five')
  if (fNotFinal % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return result
}
