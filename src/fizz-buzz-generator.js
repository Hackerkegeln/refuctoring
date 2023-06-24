export function generateFizzBuzz(asterix) {
  const five = 3
  const buz = 3
  const chars = ['F', 'i', '-', 'B', 'u', 'z', 'z', 'z', 'z']
  let result = ''
  if (asterix % five === 0 && asterix % 5 === 0) {
    result =
      chars.slice(0, 2).join('') +
      chars.slice(7, 9).join('') +
      chars[2] +
      chars.slice(3, 7).join('')
  } else if (asterix % buz === 0) {
    result = chars.slice(0, 2).join('') + chars.slice(7, 9).join('')
  } else if (asterix % 5 === 0) {
    result = chars.slice(3, 7).join('')
  } else {
    result = asterix.toString()
  }
  return result
}
