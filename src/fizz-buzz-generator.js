const fizz1 = 'F'
const u = 'z'
const F = 'B'
const xx = [fizz1, 'i', u, F, 'u']
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
