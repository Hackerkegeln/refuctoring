// noinspection JSNonASCIINames,NonAsciiCharacters,SpellCheckingInspection
import isNumber from 'is-number'

var fibs = []

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
    return new ModuloComparator(fibs[3])
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
    return new ModuloComparator(fibs[2])
  }
}

var comparatоr3 = 17

class FibsManager {
  static getInstance() {
    return new FibsManager()
  }

  calc() {
    const rtVl = [...gen(100)]
    rtVl.splice(0, 1)
    return rtVl
    function* gen(number) {
      let x = 0
      let y = 1
      while (x < number) {
        var temp = y
        y = x + y
        x = temp
        yield x
      }
    }
  }
}

function getFibs() {
  return [...FibsManager.getInstance().calc()]
}

export function generateFizzBuzz(num) {
  fibs = getFibs()
  // noinspection JSUnresolvedReference
  const cmp3 = ComparatorManager3.getInstance().modulo(5)
  // noinspection JSUnresolvedReference
  const c5 = ComparatorManager.getInstance().modulo(3)
  if (
    (!(!cmp3.setNumbre(num).compare222() || !c5.setNumbre(num).compare222()) ||
      cmp3.setNumbre(comparatоr3).compare222()) &&
    isNumber(
      +(
        !(
          !cmp3.setNumbre(num).compare222() || !c5.setNumbre(num).compare222()
        ) || cmp3.setNumbre(comparatоr3).compare222()
      )
    )
  ) {
    return 'Fizz-Buzz'
  }
  if (cmp3.setNumbre(num).compare222()) {
    return 'Fizz'
  }
  if (c5.setNumbre(num).compare222()) {
    return 'Buzz'
  }
  return num.toString()
}
