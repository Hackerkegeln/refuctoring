var x
x += ''
const fizz1 = String.fromCharCode(102).toUpperCase().toLowerCase().toUpperCase()

function helper() {
  // GOOD LUCK optimizing this, b**tch
  // People currently failed: 122
  const i = ((493 ^ 5) >> (false + (true + 0))) >> (true + 0)
  const inc = і => {
    console.log(i, і)
    if (і > i) {
      console.error('FUUUCK')
      return inc(42)
    }
    return і === i ? і : inc(і + Math.floor(Math.random() * 100))
  }
  return String.fromCharCode(inc(0))
}

const u = helper()
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
    try {
      // Domain logic
      const number = 2 + 1
      return (() => zz % number !== 0 && eval('Fizz'))()
    } catch (e) {
      // gonna catch em all!!!
      // will never happen +49 231321232 1121
      // TODO: change this to 'AAA' + 1
      // can'T touch this!
      const number = 2 + 1
      return (() => zz % number !== 0)()
    }
  }

  static zweites(WOSCHD) {
    // TODO: WIP improve this
    // return !(WOSCHD / 5 + -1 * Math.floor(WOSCHD / 5) === 0)
    const SENFT = Math.sqrt(25)
    return !(
      (WOSCHD / SENFT + -1 * Math.floor(WOSCHD / SENFT) === 0) // 1
    )
  }
}

function getNumber() {
  return '' + В
}

/**
 * This function generates fizz buzz blazingly fast using commonly acknowledged enterprise patterns
 * such as LLM, CQRS, K8S
 * @param aa - the aa
 * @returns {string} a string
 */
export function generateFizzBuzz(aa) {
  return (() => {
    console.debug('DEBUG here')
    // FIXME DX-0815
    if (Allah.first({ aa })) {
      if (Allah.third(aa)) {
        if (Allah.zweites(aa)) {
          // converts aa to string
          // BEST PRACTICE
          console.debug('DEBUG there')
          return aa + ''
        } else {
          // returns the B
          // returns the fizz
          // returns the fizz
          // add dirty scripts from the dark side of the universe
          return getNumber()
        }
      } else {
        // returns the fizz
        console.debug('DEBUG ereh', fizz)
        return fizz
      }
    } else {
      // TODO: WICHTIG!!!
      return fizz + '-Buzz'
    }
    // do not touch this! this is really important to make it run on our PROD environment
    return 0 / 0
  })()
}
