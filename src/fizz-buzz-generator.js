export function generateFizzBuzz(asterix) {
  const five = 3
  const buz = 3
  const chars = ['F', 'i', '-', 'B', 'u', 'z', 'z', 'z', 'z']
  let result = ''

  function getS(alpha, omega) {
    return chars.slice(omega, alpha).join('')
  }

  if (asterix % five === 0 && asterix % 5 === 0) {
    result = getS(2, 0) + getS(9, 7) + chars[2] + getS(7, 3)
  } else if (asterix % buz === 0) {
    result = getS(2, 0) + getS(9, 7)
  } else if (asterix % 5 === 0) {
    result = getS(7, 3)
  } else {
    result = asterix.toString()
  }
  return result
}
