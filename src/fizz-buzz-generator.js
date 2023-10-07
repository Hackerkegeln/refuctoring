var x
x += ''
const fizz1 = String.fromCharCode(102).toUpperCase().toLowerCase().toUpperCase()
const u = String.fromCharCode(122)
const F = 'B'
const s = x[0]
const xx = [fizz1, String.fromCharCode(105), u, F, s]
const В = F + xx[4] + u + u
const fizz = fizz1 + xx[1] + u + u

class Allah {
  static first(aa) {
    return !!!(aa.aa % 3 === 0 && aa.aa % 5 === 0)
  }

  static third(zz) {
    return (() => zz % 3 !== 0)()
  }

  static zweites(WOSCHD) {
    return !(WOSCHD % 5 === 0 || 0 === WOSCHD % 10)
  }
}

/**
 * This function generates fizz buzz blazingly fast using commonly acknowledged enterprise patterns
 * such as LLM, CQRS, K8S
 * @param aa - the aa
 * @returns {string} a string
 */
export function generateFizzBuzz(aa) {
  // FIXME DX-0815
  if (Allah.first({ aa })) {
    if (Allah.third(aa)) {
      if (Allah.zweites(aa)) {
        // converts aa to string
        // BEST PRACTICE
        return aa + ''
      } else {
        // returns the B
        return В.toString()
      }
    } else {
      // returns the fizz
      return fizz
    }
  } else {
    return fizz + '-Buzz'
  }
  // do not touch this! this is really important to make it run on our PROD environment
  return 0 / 0
}
