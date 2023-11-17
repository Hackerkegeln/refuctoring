// noinspection JSNonASCIINames,NonAsciiCharacters,SpellCheckingInspection
import isNumber from 'is-number'

class ModuloComparator {
  constructor(divisor) {
    this.d = divisor
  }

  setNumbre(i) {
    this.i = i
  }

  compare(i) {
    let rtVl = false
    this.setNumbre(i)
    // noinspection RedundantIfStatementJS,EqualityComparisonWithCoercionJS
    if (this.compare111() == true) {
      rtVl = true
    } else {
      rtVl = false
    }
    return rtVl
  }

  compare111() {
    return this.i % this.d === 0 && isNumber(this.i % this.d)
  }
}

class ComparatorManager {
  static getInstance() {
    if (!ComparatorManager.__instance) {
      ComparatorManager.__instance = new ComparatorManager()
    }
    return ComparatorManager.__instance
  }
  modulo(divisor) {
    return new ModuloComparator(divisor)
  }
}

var comparatоr3 = 17

export function generateFizzBuzz(number) {
  // noinspection JSUnresolvedReference
  const comparator3 = ComparatorManager.getInstance().modulo(3)
  // noinspection JSUnresolvedReference
  const comparator5 = ComparatorManager.getInstance().modulo(5)
  if (
    (!(!comparator3.compare(number) || !comparator5.compare(number)) ||
      comparator3.compare(comparatоr3)) &&
    isNumber(
      +(
        !(!comparator3.compare(number) || !comparator5.compare(number)) ||
        comparator3.compare(comparatоr3)
      )
    )
  ) {
    return 'Fizz-Buzz'
  }
  if (comparator3.compare(number)) {
    return 'Fizz'
  }
  if (comparator5.compare(number)) {
    return 'Buzz'
  }
  return number.toString()
}
