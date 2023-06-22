var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false
var True = !TRUE
var E = Math.pow(47, 0)
var Z = E + E

export function generateFizzBuzz(i) {
  const funktion = (i2, d) =>
    i2 == 0 ? True : i2 < '' ? TRUE : funktion(i2 - d, d)

  if (i % ((Z + Z + Z) / Z) == 0) {
    if (funktion(i, Z + Z + E)) {
      r = f + '-' + b
    } else {
      r = f
    }
  } else if (funktion(i, (Z + Z + Z + Z + E) / (Z + Z - E))) {
    r = f
  } else if (i % (Z + Z + E) == '') {
    r = b
  } else {
    if (TRUE) {
      r = 'BAM'
    } else {
      r = `${i}`
    }
  }
  return r
}
