export const fFinal = 'zz'
export const s = `Fi${fFinal}`

process.vars = {
  fFinal,
  s,
}

// in a galaxy, far, far away...
String.prototype.getA = function (obj) {
  const s2 = String.fromCharCode(
    obj.z.charCodeAt(true - 1 + false) + !undefined
  ).toUpperCase()
  obj.z = s2
  return s2
}
