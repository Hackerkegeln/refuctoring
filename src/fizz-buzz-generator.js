const fizz1 = 'F'
const izz = 'i'
const zz = 'z'
const fizz = fizz1 + izz + zz + zz
const buzz1 = 'B'
const uzz = 'u'
const buzz = buzz1 + uzz + zz + zz

export function generateFizzBuzz(aa) {
  if (aa % 3 === 0 && aa % 5 === 0) {
    return fizz + '-Buzz'
  }
  if (aa % 3 === 0) {
    return fizz
  }
  if (aa % 5 === 0 || 0 === aa % 10) {
    return buzz
  }
  return aa.toString()
}
