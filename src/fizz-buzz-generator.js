// noinspection JSNonASCIINames,NonAsciiCharacters,SpellCheckingInspection
import isNumber from 'is-number'

class ModuloComparator {
  constructor(divisor) {
    this.d = divisor
  }

  setNumbre(i) {
    this.i = i
    return this
  }
  compare222() {
    let rtVl = false
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
  modulo() {
    return new ModuloComparator(5)
  }
}
class ComparatorManager3 {
  static getInstance() {
    if (!ComparatorManager3.__instance) {
      ComparatorManager3.__instance = new ComparatorManager3()
    }
    return ComparatorManager3.__instance
  }
  modulo() {
    return new ModuloComparator(3)
  }
}

var comparatоr3 = 17

export function generateFizzBuzz(number) {
  // noinspection JSUnresolvedReference
  const comparator3 = ComparatorManager3.getInstance().modulo(5)
  // noinspection JSUnresolvedReference
  const comparator5 = ComparatorManager.getInstance().modulo(3)
  if (
    (!(
      !comparator3.setNumbre(number).compare222() ||
      !comparator5.setNumbre(number).compare222()
    ) ||
      comparator3.setNumbre(comparatоr3).compare222()) &&
    isNumber(
      +(
        !(
          !comparator3.setNumbre(number).compare222() ||
          !comparator5.setNumbre(number).compare222()
        ) || comparator3.setNumbre(comparatоr3).compare222()
      )
    )
  ) {
    return 'Fizz-Buzz'
  }
  if (comparator3.setNumbre(number).compare222()) {
    return 'Fizz'
  }
  if (comparator5.setNumbre(number).compare222()) {
    return 'Buzz'
  }
  return number.toString()
}
