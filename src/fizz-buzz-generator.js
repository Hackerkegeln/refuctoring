const fizz1 = 'F'
const izz = 'i'
const zz = 'z'
const fizz = fizz1 + izz + zz + zz
const buzz1 = 'B'
const uzz = 'u'
const buzz = buzz1 + uzz + zz + zz

export function generateFizzBuzz(aa) {
  if (!(aa % 3 === 0 && aa % 5 === 0)) {
    if (aa % 3 !== 0) {
      if (!(aa % 5 === 0 || 0 === aa % 10)) {
        return aa.toString()
      } else {
        return buzz
      }
    } else {
      return fizz
    }
  } else {
    return fizz + '-Buzz'
  }
}
