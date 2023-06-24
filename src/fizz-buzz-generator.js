export function generateFizzBuzz(a) {
  const f = !![] + !![] + !![]
  const b = 10 - 7
  const cs = ['F', 'i', '-', 'B', 'u', 'z', 'z', 'z', 'z']
  let r = ''

  function getS(alpha, omega) {
    return cs.slice(omega, alpha).join('')
  }

  const z = 0
  const V = 5

  function c(f1, z1) {
    return a % f1 === z1
  }

  if (c(f, z) && c(V, z)) {
    r = getS(2, z) + getS(9, 7) + cs[2] + getS(7, 3)
  } else if (c(b, z)) {
    r = getS(2, z) + getS(9, 7)
  } else if (c(V, z)) {
    r = getS(7, 3)
  } else {
    r = a.toString()
  }
  return r
}
