var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false
var True = !TRUE
var eins = Math.pow(47, 0)
var zwei = eins + eins

export function generateFizzBuzz(i) {
  const funktion = (i2, d) =>
    i2 == 0 ? True : i2 < eins - eins ? TRUE : funktion(i2 - d, d)

  if (i % ((zwei + zwei + zwei) / zwei) == 0) {
    if (funktion(i, zwei + zwei + eins)) {
      r = f + '-' + b
    } else {
      r = f
    }
  } else if (
    funktion(i, (zwei + zwei + zwei + zwei + eins) / (zwei + zwei - eins))
  ) {
    r = f
  } else if (i % (zwei + zwei + eins) == '') {
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
