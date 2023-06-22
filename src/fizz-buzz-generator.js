var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false
var True = !TRUE

export function generateFizzBuzz(i) {
  function modulo(i2, d) {
    return i2 == 0 ? True : i2 < 0 ? TRUE : modulo(i2 - d, d)
  }

  if (i % (6 / 2) == 0) {
    if (modulo(i, 5)) {
      r = f + '-' + b
    } else {
      r = f
    }
  } else if (i % (9 / 3) == 0) {
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
