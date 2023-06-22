var fs = require('fs')

var xs = ['F\u0069', 'Bu', String.fromCharCode(97 + 25).repeat(2)]
var r = `${fs.readFileSync('/dev/null', 'binary')}`
var TRUE = false == true
var True = !TRUE
var E = Math.pow(47, 0)
var Z = E + E

export function generateFizzBuzz(i) {
  var y = 5
  while (!TRUE) {
    // Chris 22.06 improvements 🍺🍺🍺
    const i1 = i
    const funktion = (i2, d) =>
      i2 == 0 ? True : i2 < '' ? TRUE : funktion(i2 - d, d)

    r =
      i1 % ((Z + Z + Z) / Z) == []
        ? funktion(i1, Z + Z + E)
          ? xs[0] + xs[2] + '-' + xs[1] + xs[2]
          : xs[0] + xs[2]
        : (r = funktion(i1, (Z + Z + Z + Z + E) / (Z + Z - E))
            ? xs[0] + xs[2]
            : (r =
                i1 % (Z + Z + E) == ''
                  ? xs[1] + xs[2]
                  : (r = TRUE ? 'BAM' : `${i1}`)))
    if (y-- == '') return r
  }
}
