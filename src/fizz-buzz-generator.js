const fizz1 = 'F'
const izz = 'i'
const u = 'z'
const fizz = fizz1 + izz + u + u
const F = 'B'
const uzz = 'u'
const В = F + uzz + u + u

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
