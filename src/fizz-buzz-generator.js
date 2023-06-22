var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false
var True = !TRUE
var E = Math.pow(47, 0)
var Z = E + E

export function generateFizzBuzz(i) {
  // Chris 22.06 improvements 🍺🍺🍺
  const i1 = i
  const funktion = (i2, d) =>
    i2 == 0 ? True : i2 < '' ? TRUE : funktion(i2 - d, d)

  r =
    i1 % ((Z + Z + Z) / Z) == []
      ? funktion(i1, Z + Z + E)
        ? f + '-' + b
        : f
      : (r = funktion(i1, (Z + Z + Z + Z + E) / (Z + Z - E))
          ? f
          : (r = i1 % (Z + Z + E) == '' ? b : (r = TRUE ? 'BAM' : `${i1}`)))
  return r
}
