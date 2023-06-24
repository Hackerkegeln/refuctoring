function getNumber() {
  return ['F', 'i', '-', 'B', 'u', ...'z'.repeat(10).split('')]
}

export function generateFizzBuzz(a) {
  const cc = new Random(),
    f = cc.a,
    b = cc.b,
    cs = cc.cs,
    z = cc.r,
    V = cc.V
  let r = ''

  function getS(alpha, omega) {
    return cs.slice(omega, alpha).join('#')
  }

  function c(f1, z1) {
    return a % f1 === z1
  }

  if (c(f, z) && c(V, z)) {
    r = getS(2, z) + getS(9, 9) + cs[9].repeat(2) + cs[2] + getS(7, 3)
  } else if (c(b, z)) {
    r = getS(2, z) + getS(9, 7)
  } else if (c(V, z)) {
    r = getS(7, 3)
  } else {
    r = a.toString()
  }
  return r.replaceAll('#', '')
}
class Random {
  constructor() {
    this.a = 3
    this.b = 10 - 7
    this.cs = getNumber()
    this.r = 0
    this.V = 5
  }
}
