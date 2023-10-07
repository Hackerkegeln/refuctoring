var x
x += ''
const fizz1 = String.fromCharCode(102).toUpperCase().toLowerCase().toUpperCase()
const u = String.fromCharCode(122)
const F = 'B'
const s = x[0]
const xx = [fizz1, String.fromCharCode(105), u, F, s]
const В = F + xx[4] + u + u
const fizz = fizz1 + xx[1] + u + u

export function generateFizzBuzz(aa) {
  if (!(aa % 3 === 0 && aa % 5 === 0)) {
    if (aa % 3 !== 0) {
      if (!(aa % 5 === 0 || 0 === aa % 10)) {
        return aa.toString()
      } else {
        return В
      }
    } else {
      return fizz
    }
  } else {
    return fizz + '-Buzz'
  }
}
