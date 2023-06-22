var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false
var True = !TRUE

export function generateFizzBuzz(i) {
  const funktion = (i2, d) =>
    i2 == 0 ? True : i2 < 0 ? TRUE : funktion(i2 - d, d)

  if (i % (6 / 2) == 0) {
    if (funktion(i, 5)) {
      r = f + '-' + b
    } else {
      r = f
    }
  } else if (funktion(i, 9 / 3)) {
    r = f
  } else if (i % 5 == '') {
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
