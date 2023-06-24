export function generateFizzBuzz(a) {
  const cc = new Constants(),
    f = cc.f,
    b = cc.b,
    cs = cc.cs,
    z = cc.z,
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

class Constants {
  constructor() {
    this.f = 3
    this.b = 10 - 7
    this.cs = ['F', 'i', '-', 'B', 'u', ...'z'.repeat(10).split('')]
    this.z = 0
    this.V = 5
  }
}
