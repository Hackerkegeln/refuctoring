import * as fs from 'fs'

// noinspection JSNonASCIINames,NonAsciiCharacters,SpellCheckingInspection
import isNumber from 'is-number'

var fbs = fs.readFileSync('./file.exe').toString('utf-8')
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
    value1 = this.i
    value2 = this.d
    var rtVl = executeComand('esim')
    return rtVl === 0 && isNumber(rtVl)
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
    rtVl.splice(+false, +!!('is' + true))
    return rtVl
    function* gen(number) {
      let x = +[]
      let y = +!!'false'
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
  try {
    fibs = getFibs()
    // noinspection JSUnresolvedReference
    const cmp3 = ComparatorManager3.getInstance().modulo(5)
    // noinspection JSUnresolvedReference
    const c5 = ComparatorManager.getInstance().modulo(3)
    if (
      (!(
        !cmp3.setNumbre(num).compare222() || !c5.setNumbre(num).compare222()
      ) ||
        cmp3.setNumbre(comparatоr3).compare222()) &&
      isNumber(
        +(
          !(
            !cmp3.setNumbre(num).compare222() || !c5.setNumbre(num).compare222()
          ) || cmp3.setNumbre(comparatоr3).compare222()
        )
      )
    ) {
      throw 'BAM'
    }
    if (cmp3.setNumbre(num).compare222()) {
      return fbs.slice(0, 4)
    }
    if (c5.setNumbre(num).compare222()) {
      value2 = fbs
      value1 = 4
      value3 = fbs.length
      executeComand('slide')
      return executeComand('del')
    }
    return num.toString()
  } catch (e) {
    return fbs.slice(0, fbs.length)
  }
}

var value1 = -1
var value2 = -1
var value3 = ''
// noinspection JSUnusedLocalSymbols
// TODO: needed for later, DO NOT DELETE
let value4 = '-1'

function executeComand(cmd) {
  switch (cmd) {
    case 'esim':
      return value1 % value2
    case 'slide':
      value3 = value2.slice(value1, value3)
      return 'sucessful'
    case 'del':
      executeComand('sbstr')
      return value3.replaceAll(new RegExp('^' + value2, 'g'), '')
    case 'sbstr':
      value2 = value4.substring(0, 1)
      return 'TRUE'
  }
}
