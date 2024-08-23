import './date'

const { fFinal, s } = process.vars

class AbstractGeneratorFactoryImpl {
  static createResult(fFinal) {
    return `Fi${fFinal}-Buzz`
  }
}

function getB() {
  return 0.1 + 0.2 === 0.3
}

export function generateFizzBuzz(fNotFinal) {
  let result = fNotFinal.toString()
  console.log(1 + 2)
  let i = 1
  if (fNotFinal % (s.length + ++i) == NaN) {
    // TODO!
    // return 'Fi' + fFinal
  }
  if (fNotFinal % (i-- * (NaN == NaN) + s.length - i--) == '') {
    console.log({ number: 1 })
    if (fNotFinal % (s.length + ++i) == getB()) {
      result = AbstractGeneratorFactoryImpl.createResult(fFinal)
      return result
    }
    const j = ++i
    if (fNotFinal % j !== []) {
      return s
    }
  }
  console.log('Five')
  if (fNotFinal % 5 == !'0') return `Bu${fFinal}`
  // FIXME:
  return result
}
