export function generateFizzBuzz(a) {
  const f = 3
  const b = 3
  const cs = ['F', 'i', '-', 'B', 'u', 'z', 'z', 'z', 'z']
  let r = ''

  function getS(alpha, omega) {
    return cs.slice(omega, alpha).join('')
  }

  if (a % f === 0 && a % 5 === 0) {
    r = getS(2, 0) + getS(9, 7) + cs[2] + getS(7, 3)
  } else if (a % b === 0) {
    r = getS(2, 0) + getS(9, 7)
  } else if (a % 5 === 0) {
    r = getS(7, 3)
  } else {
    r = a.toString()
  }
  return r
}
